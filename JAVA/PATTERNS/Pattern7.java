package PATTERNS;
import java.util.*;
public class Pattern7 {
    public static void main(String[] args) {
        int r = 4;
        for(int i = 1;i<=r;i++){
            for(int j = 1;j <= r-i;j++){
                System.out.print(" ");
            }
            for(int k = 1;k<=i;k++){
                System.out.print(k);

            }
            for(int l = i - 1;l>=1;l--){
                System.out.print(l);
            }
            System.out.println();
        }
    }
}
