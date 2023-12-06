def lower(l1, l2):
    minval = min(l1[0],l2[0])
    maxlower = max(l1[0],l2[0]) - 1
    if maxlower <= minval:
        return tuple()
    return (minval, maxlower)

def intersect(l1, l2):
    min_intersect = max(l1[0],l2[0])
    max_intersect = min(l1[1],l2[1])
    if min_intersect>max_intersect:
        return tuple()
    return (min_intersect,max_intersect)
    

def upper(l1, l2):
    maxval = max(l1[1],l2[1])
    minupper = min(l1[1],l2[1])+1
    if minupper>=maxval:
        return tuple()
    return (minupper, maxval)

def divide(l1, l2):
    return lower(l1,l2), intersect(l1,l2), upper(l1,l2)