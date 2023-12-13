import math

InputList = []
with open("input.txt", "r") as data:
    for t in data:
        Line = t.strip()
        InputList.append(Line)

TimeList = list(map(int, InputList[0][10:].split()))
DistanceList = list(map(int, InputList[1][10:].split()))
Part1Answer = 1
for t in range(len(TimeList)):
    Time, Dist = TimeList[t], DistanceList[t]
    FrontX = (Time - math.sqrt(Time**2 - 4*Dist))//2
    BackX = (Time + math.sqrt(Time**2 - 4*Dist))//2
    Range = int(BackX - FrontX)
    if (BackX**2 - Time*BackX + Dist) == 0:
        Range -= 1
    Part1Answer *= Range

Time = int("".join(InputList[0][10:].split()))
Dist = int("".join(InputList[1][10:].split()))
FrontX = (Time - math.sqrt(Time**2 - 4*Dist))//2
BackX = (Time + math.sqrt(Time**2 - 4*Dist))//2
Range = int(BackX - FrontX)
if (BackX**2 - Time*BackX + Dist) == 0:
    Range -= 1
Part2Answer = Range

print(f"{Part1Answer = }")
print(f"{Part2Answer = }")