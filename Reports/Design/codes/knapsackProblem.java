// Input:
// Values (stored in array v)
// Weights (stored in array w)
// Number of distinct items (n)
// Knapsack capacity (W)

for j from 0 to W do:
     // 0 throughout the first row, since no items are taken
     m[0, j] := 0 
 
 for i from 1 to n do:
     for j from 0 to W do:
     	// if weight[i] of the item is less or equal to the current capacity, j
         if w[i] <= j then:
             m[i, j] := max(m[i-1, j], m[i-1, j-w[i]] + v[i])
         else:
             m[i, j] := m[i-1, j]

