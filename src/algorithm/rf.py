import pandas
import numpy as np
import json
colName = ['DATE_TIME','RF.BKA.02_30 min','FW.BBU.01_Q','FW.BBU.01_WL']

df = pandas.read_csv('data.csv',usecols=[colName[0],colName[1]])
f = df.values.tolist()

situation = {}
period = []
count = 1
###################### RF ######################
for row in f:
    date,time = row[0].split(' ')
    value = row[1]
    if int(value) != 0:
        period.append({'date':date,'time':time,'value':value})
        print(count)
        count += 1
    elif(int(value) == 0 and len(period) > 0):
        situation[len(situation)] = period
        period = []

###################### Q and WL ######################
# for row in f:
#     date,time = row[0].split(' ')
#     value = row[1]
#     if(not np.isnan(value)):
#         hour,minute,second = time.split(':')
#         if(minute == '00'):
#             situation.append({'date':date,'time':time,'value':value})
print(situation,len(situation),end='\n')
# with open('wl.json', 'w') as fp:
#     json.dump(situation, fp)