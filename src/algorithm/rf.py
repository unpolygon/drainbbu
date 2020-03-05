import pandas
import numpy as np
colName = ['DATE_TIME','RF.BKA.02_30 min','FW.BBU.01_Q','FW.BBU.01_WL']

df = pandas.read_csv('data.csv',usecols=[colName[0],colName[3]])
f = df.values.tolist()

situation = {}
period = []

###################### RF ######################
# for row in f:
#     date,time = row[0].split(' ')
#     value = row[1]
#     if int(value) != 0:
#         period.append([date,time,value])
#     elif(int(value) == 0 and len(period) > 0):
#         situation[len(situation)] = period
#         period = []

###################### Q and WL ######################
for row in f:
    date,time = row[0].split(' ')
    value = row[1]
    if(not np.isnan(value)):
        situation[(date,time)] = value

print(situation,len(situation),end='\n')