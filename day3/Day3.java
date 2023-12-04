package day3;


import java.awt.*;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class Day3 {

    private static final String INPUT = "src/main/resources/input.txt";
    private static final Pattern NUMBER_PATTERN = Pattern.compile("\\d+");
    private static final Map<AdjacentDirection, Point> DIRECTION_MAP = Map.of(
            AdjacentDirection.TOP_LEFT, new Point(-1, -1),
            AdjacentDirection.TOP, new Point(-1, 0),
            AdjacentDirection.TOP_RIGHT, new Point(-1, 1),
            AdjacentDirection.LEFT, new Point(0, -1),
            AdjacentDirection.RIGHT, new Point(0, 1),
            AdjacentDirection.BOTTOM_LEFT, new Point(1, -1),
            AdjacentDirection.BOTTOM, new Point(1, 0),
            AdjacentDirection.BOTTOM_RIGHT, new Point(1, 1)
    );

    public void run() {
        List<String> engineSchematicLines = ReadTxt.readFile(INPUT);

        int enginePartNumbersSummed = calculateSumOfAdjacentPartNumbers(engineSchematicLines);

        System.out.println(ReadTxt.formatSectionHeader("DAY 3"));
        System.out.println("Sum of possible engine part numbers = " + enginePartNumbersSummed);
        System.out.println("Sum of all gear ratios = " + gearRatiosSummed);
        System.out.println(ReadTxt.SECTION_FOOTER);
        System.out.println();
    }

    private int calculateSumOfAdjacentPartNumbers(List<String> engineSchematicLines) {
        Set<PartNumberDetail> partNumberDetails = findAllPartNumbersAdjacentToSymbols(engineSchematicLines);

        return partNumberDetails.stream()
                .filter(Objects::nonNull)
                .mapToInt(PartNumberDetail::getNumber)
                .sum();
    }

    private Set<PartNumberDetail> findAllPartNumbersAdjacentToSymbols(List<String> engineSchematicLines) {
        return IntStream.range(0, engineSchematicLines.size())
                .boxed()
                .flatMap(lineNumber -> extractPartNumbersFromSchematicLine(engineSchematicLines, lineNumber))
                .collect(Collectors.toSet());
    }

    private Stream<PartNumberDetail> extractPartNumbersFromSchematicLine(List<String> engineSchematicLines, int lineNumber) {
        String line = engineSchematicLines.get(lineNumber);
        return IntStream.range(0, line.length())
                .filter(charIndex -> isSymbolCharacter(line.charAt(charIndex)))
                .mapToObj(charIndex -> extractPartNumbersAdjacentToSymbol(engineSchematicLines, lineNumber, charIndex))
                .flatMap(Set::stream);
    }

    private Set<PartNumberDetail> extractPartNumbersAdjacentToSymbol(List<String> engineSchematicLines, int lineNumber, int charIndex) {
        Set<PartNumberDetail> partNumberDetails = new HashSet<>();
        for (AdjacentDirection direction : AdjacentDirection.values()) {
            AdjacentPosition indexes = getAdjacentIndexForDirection(direction, lineNumber, charIndex);
            PartNumberDetail partNumberDetail = extractPartNumberAtPosition(engineSchematicLines, indexes);

            if (partNumberDetail != null) {
                partNumberDetails.add(partNumberDetail);
            }
        }
        return partNumberDetails;
    }

    private PartNumberDetail extractPartNumberAtPosition(List<String> engineSchematicLines, AdjacentPosition indexes) {
        if (!isIndexesValid(engineSchematicLines, indexes)) {
            return null;
        }

        String engineSchematicLine = engineSchematicLines.get(indexes.lineIndex());
        Matcher matcher = NUMBER_PATTERN.matcher(engineSchematicLine);

        while (matcher.find()){
            int start = matcher.start();
            int end = matcher.end() - 1;

            if (start <= indexes.charIndex() && indexes.charIndex() <= end) {
                int number = Integer.parseInt(matcher.group());
                return new PartNumberDetail(number, indexes.lineIndex(), start, end);
            }
        }

        return null;
    }

    private boolean isSymbolCharacter(char character) {
        return !(Character.isDigit(character) || character == '.');
    }


    private AdjacentPosition getAdjacentIndexForDirection(AdjacentDirection direction, int currentLineNumber, int foundSymbolIndex) {
        Point directionOffset = DIRECTION_MAP.get(direction);
        return new AdjacentPosition(currentLineNumber + directionOffset.x, foundSymbolIndex + directionOffset.y);
    }

    private boolean isIndexesValid(List<String> engineSchematicLines, AdjacentPosition indexes) {
        return indexes.lineIndex() >= 0 && indexes.lineIndex() < engineSchematicLines.size() &&
                indexes.charIndex() >= 0 && indexes.charIndex() < engineSchematicLines.get(indexes.lineIndex()).length();
    }
}