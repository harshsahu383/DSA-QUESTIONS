   class variables {
          public static void main(String[] args) {
            int  age = 2222; // int data type is primitive data type in java range of 4 bytes 32 bits -2147483648 to 2147483647 
            byte number = 12;// byte data is also a example of primitive data types range of 1 byte 8 bits -128 to 127
            short s = 500;//short data type is also a example of primitive data types range of 2 bytes 16 bits -32,768 to 32-798
            long l = 11201201; //long data type is also an example of primitive data types range of 8 bytes 64 bits -9223372036854775808 to 9223372036854775807
            Boolean flag = true;//bollean is an type of primitive data type and have only two values true or false
            float f =  10; // float data type is a primitive dATA TYPE Stores the decimal values in it range of 4 bytes 32 bits 	1.40239846e-45f to 3.40282347e+38f
            double d = 111111.0000; // double is also an primitive data type and it has range of 8bytes 64 bits 4.94065645841246544e-324 to 1.79769313486231570e+308
            char ch = 'h';// char data is a primitive data type and it has ranfe of 2 bytes 16 bits 

            System.out.println("int data type : "+ age);
            System.out.println("byte type : "+ number);
            System.out.println("short : "+ s);
            System.out.println("long data type : "+ l);
            System.out.println("boolean data type : "+ flag);
            System.out.println("float data type : "+ f);
            System.out.println("double data type : "+ d);
            System.out.println("ch data type : "+ ch);
          }
    
  }
  class Variables{
   static int add(int a,int b){
        return a+b;
    }
    public static void main(String[] args) {
     int result = add(5,10);
     System.out.println("Sum :" + result);
     System.out.println(args[0]);

    }
}