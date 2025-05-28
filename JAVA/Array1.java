public class Array1{
     static int[] find(int[] arr,int x){
        int count = 0,last = 0;
        for(int i = 0;i<arr.length;i++){
            if(arr[i] == x){
                count++;
                last = i;
            }
        }
        return new int[] { count, last};  
       }
    public static void main(String[] args) {
        int [] arr = {0,1,2,1,1,3};
        int x = 1;
        System.out.println(find(arr,x));
    }
}