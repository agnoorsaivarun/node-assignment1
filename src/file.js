const index=require("./index")

index.myFileWriter("f1.txt","hi")
index.myFileReader("f1.txt")
index.myFileUpdater("f1.txt","hello")
index.myFileWriter("f2.txt","hello")
index.myFileDeleter("f2.txt")
// index.myFileDeleter("f1.txt")