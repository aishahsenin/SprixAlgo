/* array A[] has the items to sort; array B[] is a work array */
void BottomUpMergeSort(A[], B[], n)
{
  /* Each 1-element run in A is already "sorted". */
  /* Make successively longer sorted runs of length 2, 4, 8, 16... until whole array is sorted. */
  for (width = 1; width < n; width = 2 * width)
    {
      /* Array A is full of runs of length width. */
      for (i = 0; i < n; i = i + 2 * width)
        {
          /* Merge two runs: A[i:i+width-1] and A[i+width:i+2*width-1] to B[] */
          /* or copy A[i:n-1] to B[] ( if(i+width >= n) ) */
          BottomUpMerge(A, i, min(i+width, n), min(i+2*width, n), B);
        }
      /* Now work array B is full of runs of length 2*width. */
      /* Copy array B to array A for next iteration. */
      /* A more efficient implementation would swap the roles of A and B */
      CopyArray(B, A, n);
      /* Now array A is full of runs of length 2*width. */
    }
}

void BottomUpMerge(A[], iLeft, iRight, iEnd, B[])
{
  i0 = iLeft;
  i1 = iRight;
  j;

  /* While there are elements in the left or right runs */
  for (j = iLeft; j < iEnd; j++)
    {
      /* If left run head exists and is <= existing right run head */
      if (i0 < iRight && (i1 >= iEnd || A[i0] <= A[i1]))
        {
          B[j] = A[i0];
          i0 = i0 + 1;
        }
      else
        {
          B[j] = A[i1];
          i1 = i1 + 1;
        }
    }
}

void CopyArray(B[], A[], n)
{
    for(i = 0; i < n; i++)
        A[i] = B[i];
}