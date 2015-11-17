 Greedy-Iterative-Activity-Selector(A, s, f): 
  
      Sort A by finish times stored in f'
      
      S = {A[1]} 
      k = 1
      
      n = A.length
      
     for i = 2 to n:
        if s[i] ≥ f[k]: 
            S = S U {A[i]}
            k = i
     
     return S