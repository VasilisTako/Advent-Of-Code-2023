def compute(L):
    total = 0
    while any(L):
        total += L[-1]
        L = [L[i+1]-L[i] for i in range(len(L)-1)]
    return total

d = [list(map(int,ligne.split())) for ligne in open("input.txt")]
print(sum(compute(L) for L in d))
print(sum(compute(L[::-1]) for L in d))

