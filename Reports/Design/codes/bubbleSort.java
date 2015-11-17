public static void BubbleSort( int [ ] num )
{
     int j;
     // set flag to true to begin first pass
     boolean flag = true;   
     int temp;   //holding variable

     while ( flag )
     {
            //set flag to false awaiting a possible swap
            flag= false;    
            for( j=0;  j < num.length -1;  j++ )
            {
                  // change to > for ascending sort
                   if ( num[ j ] < num[j+1] )   
                   {
                          //swap elements
                           temp = num[ j ];                
                           num[ j ] = num[ j+1 ];
                           num[ j+1 ] = temp;
                           //shows a swap occurred  
                          flag = true;              
                  } 
            } 
      } 
} 