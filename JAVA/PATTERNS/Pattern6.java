package PATTERNS;
import java.util.*;

public class Pattern6 {
    public static void main(String[] args) {
        int r = 5;
        int c = 5;
        for(int i = 1;i<=r;i++){
            for(int j = 1;j<=c;j++){
                if(i%2!=0){
                    if(j%2!=0){
                        System.out.print("1");
                    }
                    else{

                        System.out.print("2");
                    }

                }
                else {
                    if(j%2!=0){
                        System.out.print("2");

                    }
                else{

                    System.out.print("1");
                }

                }
            }
            System.out.println();
        }
    }
}
// public class Pattern6 {
//     public static void main(String[] args) {
//         int r = 5;
//         int c = 5;
//         for (int i = 1; i <= r; i++) {
//             for (int j = 1; j <= c; j++) {
//                 if (i % 2 != 0) { // Odd row
//                     if (j % 2 != 0) {
//                         System.out.print("1");
//                     } else {
//                         System.out.print("2");
//                     }
//                 } else { // Even row
//                     if (j % 2 != 0) {
//                         System.out.print("2");
//                     } else {
//                         System.out.print("1");
//                     }
//                 }
//             }
//             System.out.println();
//         }
//     }
// }
