/* array A[] has the items to sort; array B[] is a work array */
void BottomUpMergeSort(A[], B[], n){
  for (width = 1; width < n; width = 2 * width){
      for (i = 0; i < n; i = i + 2 * width){
          BottomUpMerge(A, i, min(i+width, n), min(i+2*width, n), B);
        }
      CopyArray(B, A, n);
    }
}

void BottomUpMerge(A[], iLeft, iRight, iEnd, B[]){
  i0 = iLeft;
  i1 = iRight;
  j;

  for (j = iLeft; j < iEnd; j++){
      if (i0 < iRight && (i1 >= iEnd || A[i0] <= A[i1])){
          B[j] = A[i0];
          i0 = i0 + 1;
        }
      else{
          B[j] = A[i1];
          i1 = i1 + 1;
        }
    }
}

void CopyArray(B[], A[], n){
    for(i = 0; i < n; i++)
        A[i] = B[i];
}