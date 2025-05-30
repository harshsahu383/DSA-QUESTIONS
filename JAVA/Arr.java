import java.util.*;

public class Arr {
   @SuppressWarnings("UnnecessaryContinue")
   public static int unique(int [] arr,int x){
    int result = 0;
    for(int i = 0; i < arr.length; i++){
        for(int j = i + 1; j<arr.length;j++){
            if(arr[i] == arr[j]){
                continue ;
            }
            else{
                result = arr[i] ;
            }
        }
    }
    return result ;
   }

    public static int findTriplets(int [] arr,int x){
            int pair = 0;
            for (int i = 0; i < arr.length; i++) {
                for (int j = i+i; j < arr.length - 1; j++) {
                    for(int k = j+1;k < arr.length-2; k++){
                        if(arr[i] + arr[j] + arr[k] == x){
                            pair++;
                        }
                    }
                }
            }
            return pair;
    }
    public static int findPairs(int [] arr,int x){
        int pair = 0;
        for(int i = 0; i<arr.length;i++){
            for(int j = 1;j < arr.length-1;j++){
                if(arr[i] + arr[j] == x){
                    pair++;
                }
            }
        }
        return pair ;
    }

    public static void main(String[] args) {
    int [] arr = {0,1,2,3,4,1,2,3,0};
    System.out.println(unique(arr, x));
    }
}