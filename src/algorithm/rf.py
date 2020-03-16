import pandas
import numpy as np
import json
colName = ['DATE_TIME','RF.BKA.02_30 min','FW.BBU.01_Q','FW.BBU.01_WL']

df = pandas.read_csv('data.csv',usecols=[colName[0],colName[1],colName[2],colName[3]])
f = df.values.tolist()

with open('./rf.json') as fs:
  rf = json.load(fs)

# print(rf)

situation = {}
period = []
###################### RF ######################
for row in f:
    date,time = row[0].split(' ')
    year,month,day = date.split('-')
    hour,minute,second = time.split(':')
    valueRf = row[1]
    valueQ = row[2]
    valueWl = row[3]
    if int(valueRf) != 0 and not np.isnan(row[2]) and not np.isnan(row[3]):
        period.append({'date':date,
                       'month':month,
                       'year':year,
                       'time':time,
                        'rfValue':valueRf,
                        'qValue':valueQ,
                        'wlValue':valueWl})

    elif(int(valueRf) == 0):
        if(len(period) >= 6):
            situation[len(situation)] = period
        period = []

###################### Q and WL ######################
# count = 0
# line = 0
# for row in range(len(f)):
#     print(row)
#     date,time = f[row][0].split(' ')
#     try:
#       lenCount = len(rf[str(count)])
#       firstDate =  rf[str(count)][0]['date']
#       firstTime = rf[str(count)][0]['time']
#       if date == firstDate and time == firstTime:
#           period = []
#           while(lenCount):
#               day,month,year = date.split('-')
#               value = f[row][1]
#               period.append({'date':date,'month':month,'year':year,'time':time,'value':value})
#               row += 1
#               lenCount -= 1
#               date,time = f[row][0].split(' ')
#           situation[count] = period
#           count += 1
#     except:
      # break

print(situation,len(situation),end='\n')
with open('rf.json', 'w') as fp:
    json.dump(situation, fp)