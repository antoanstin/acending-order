var a=[1,5,10,3,2];
   function array(a)
   {
	   for(i=0;i<a.length;i++)
	   {
		   for(j=i+1;j<a.length;j++)
		   {
			   if(a[i]>a[j])
			   {
			   temp=a[j];
			   a[j]=a[i];
			   a[i]=temp
			   }
		   }
	   }
	  
		return a;
   }
   
console.log(array(a));