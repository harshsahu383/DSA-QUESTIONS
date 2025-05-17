package PATTERNS;
import java.util.*;
public class Pattern5 {
    public static void main(String[] args) {
        int r = 7;
        for(int i = 1;i<=r;i++){
            for(int j = i;j<=r;j++){
                System.out.print(j);
            }
            for(int k = 1;k<=i-1;k++){
                System.out.print(k);
            }
            System.out.println();
        }
        }
}
