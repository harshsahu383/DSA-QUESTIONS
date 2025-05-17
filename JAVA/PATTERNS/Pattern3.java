package PATTERNS;
import java.util.*;
public class Pattern3 {
    public static void main(String[] args) {
        int r = 5;
        for(int i = r; i>=1;i--){
            for(int j  = 1;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
