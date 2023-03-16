class SelectionSort
{
   public sort(arr: number[])
   {
       for(let i = 0; i &lt; arr.length - 1; i++)
       {
           let min = i;
           
           for(let j = i + 1; j &lt; arr.length; j++)
           {
               if(arr[j] &lt; arr[min])
               {
                   // Choose the lesser of the two:
                   min = j;
               }
           }
           // In-place swap:
           const tmp = arr[min];
           arr[min] = arr[i];
           arr[i] = tmp;
       }
   }
}