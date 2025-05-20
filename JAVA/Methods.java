import java.util.*;

class Algebra{
    int divide(int a, int b) {
        int ans = a + b;
        return ans ;
    


    }
}
public class Methods {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number : ");
        int x = sc.nextInt();
        System.out.println("Enter a  number : ");
        int y = sc.nextInt();
        Algebra obj = new Algebra();
         int result = obj.divide(x,y);
         System.out.println(result);
         sc.close();

    }
    
}
