                        //   *
                        //  ***
                        // ***** 
                        //  ***
                        //   *

public class Pattern9 {
    public static void main(String[] args) {
        int r = 3;
        for(int i =1;i<=r;i++){
            for(int j = 1;j<=r-i;j++){
                System.out.print(" ");

            }
            for(int k = 1;k<=2*i-1;k++){
                System.out.print("*");
            }
        System.out.println();
        }
        for(int l = r - 1;l>=1;l--){
            for(int g = 1;g<=r-l;g++ ){
                System.out.print(" ");

            }
            for(int m = 1;m<=2*l-1;m++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
