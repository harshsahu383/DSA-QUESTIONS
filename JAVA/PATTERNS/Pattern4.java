package PATTERNS;
public class Pattern4 {
    public static void main(String[] args) {
        int r = 4;
        int c = 1;
        for(int i = 1;i<=r;i++){
            for(int j = 1;j<=r-i;j++){
                System.out.print(" ");
            }
            for(int k = 1;k<=2*i-1;k++){
                System.out.print("*");
            }
            System.out.println();
        }
    } 
}
