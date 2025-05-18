
public class Pattern10 {
    public static void main(String[] args) {
        int r = 5;
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < r - i; j++) {
                System.out.print(" ");
            }
            int num = 1;
            for (int k = 0; k <= i; k++) {
                System.out.printf("%2d",num);
                num = num * (i-k)/(k+1);
        }
        System.out.println();

    }
}
}
