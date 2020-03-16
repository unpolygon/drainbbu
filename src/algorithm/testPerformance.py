import datetime
sf = []
arr = [i for i in range(10000)]
start = datetime.datetime.now()

for i in range(2):
    for j in arr:
        print(j)

finish = datetime.datetime.now()
sf.append(finish-start)


start = datetime.datetime.now()
for i in arr:
    print(i)
for i in arr:
    print(i)

finish = datetime.datetime.now()
sf.append(finish-start)
print(sf)