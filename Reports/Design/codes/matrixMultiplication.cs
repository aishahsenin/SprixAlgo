// Program in C# to multiply two matrices using Rectangular arrays.
using System;
class MatrixMultiplication
{
	int[,] a;
	int[,] b;
	int[,] c;
	
	public void ReadMatrix()
	{
		Console.WriteLine("\n Size of Matrix 1:");
		Console.Write("\n Enter the number of rows in Matrix 1 :");
		int m=int.Parse(Console.ReadLine());
		Console.Write("\n Enter the number of columns in Matrix 1 :");
		int n=int.Parse(Console.ReadLine());
		a=new int[m,n];
		Console.WriteLine("\n Enter the elements of Matrix 1:");
		for(int i=0;i<a.GetLength(0);i++)
		{
			for(int j=0;j<a.GetLength(1);j++)
			{
				a[i,j]=int.Parse(Console.ReadLine());
			}
		}
		
		Console.WriteLine("\n Size of Matrix 2 :");
		Console.Write("\n Enter the number of rows in Matrix 2 :");
		m=int.Parse(Console.ReadLine());
		Console.Write("\n Enter the number of columns in Matrix 2 :");
		n=int.Parse(Console.ReadLine());
		b=new int[m,n];
		Console.WriteLine("\n Enter the elements of Matrix 2:");
		for(int i=0;i<b.GetLength(0);i++)
		{
			for(int j=0;j<b.GetLength(1);j++)
			{
				b[i,j]=int.Parse(Console.ReadLine());
			}
		}
	}
	
	public void PrintMatrix()
	{
		Console.WriteLine("\n Matrix 1:");
		for(int i=0;i<a.GetLength(0);i++)
		{
			for(int j=0;j<a.GetLength(1);j++)
			{
				Console.Write("\t"+a[i,j]);
			}
			Console.WriteLine();
		}
		Console.WriteLine("\n Matrix 2:");
		for(int i=0;i<b.GetLength(0);i++)
		{
			for(int j=0;j<b.GetLength(1);j++)
			{
				Console.Write("\t"+b[i,j]);
			}
			Console.WriteLine();
		}
		Console.WriteLine("\n Resultant Matrix after multiplying Matrix 1 & Matrix 2:");
		for(int i=0;i<c.GetLength(0);i++)
		{
			for(int j=0;j<c.GetLength(1);j++)
			{
				Console.Write("\t"+c[i,j]);
			}
			Console.WriteLine();
		}
		
	}
	public void MultiplyMatrix()
	{
		if(a.GetLength(1)==b.GetLength(0))
		{
			c=new int[a.GetLength(0),b.GetLength(1)];
			for(int i=0;i<c.GetLength(0);i++)
			{
				for(int j=0;j<c.GetLength(1);j++)
				{
					c[i,j]=0;
					for(int k=0;k<a.GetLength(1);k++) // OR k<b.GetLength(0)
					c[i,j]=c[i,j]+a[i,k]*b[k,j];
				}
			}
		}
		else
		{
			Console.WriteLine("\n Number of columns in Matrix1 is not equal to Number of rows in Matrix2.");
			Console.WriteLine("\n Therefore Multiplication of Matrix1 with Matrix2 is not possible");
			Environment.Exit(-1);
		}
	}
}
class Matrices
{
	public static void Main()
	{
		MatrixMultiplication MM=new MatrixMultiplication();
		MM.ReadMatrix();
		MM.MultiplyMatrix();
		MM.PrintMatrix();
	}
}