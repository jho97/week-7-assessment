                                                | Size of array
tinyArray time for insert (18 μs)               |   10
tinyArray time for append (50.042 μs)           |   10
                                                |
smallArray time for insert (23.542 μs)          |   100
smallArray time for append (55.917 μs)          |   100
                                                |
mediumArray time for insert (128.667 μs)        |   1000
mediumArray time for append (96.292 μs)         |   1000
                                                |
largeArray time for insert (6.630959 ms)        |   10000
largeArray time for append (417.958 μs)         |   10000
                                                |
extraLargeArray time for insert (769.164208 ms) |   100000
extraLargeArray time for append (7.578167 ms)   |   100000


How does the function scale?

I attached a screenshot of a table that shows the data a little better. I was able to graph the data and see that the insert method closely resembles a exponential scale, while the append has a steady linear scale.
Which of the two functions scale better?

The append function scales better over time due to the fact that when more values are inserted into the array, it doesn't drastically change the time it takes to process the array.
How can you tell?

There is only a 7.52 ms difference from 10 values to 100000 values for the append function to process. On the other hand, the insert function, has a difference of 769.146 ms difference from the smallest input taking .018 ms to the largest input taking 769.164 ms.

Extra Credit
The insert function is much slower because it requires all elements at or after the inserted position to be shifted up by one. Taking more time because of the allocation of other values.