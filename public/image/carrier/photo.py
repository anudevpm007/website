import os

path = "C:\GitHub\website\public\image\BlogSlug"

dir_list = os.listdir(path)


count = 0

for x in dir_list:
    img = "import img"+ str(count) +" from "+"\"@/public/image/BlogSlug/"+x+"\""
    print(img)
    count = count +1
