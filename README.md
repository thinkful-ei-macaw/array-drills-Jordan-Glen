2. push method
length is 1, capacity is 3, ptr or memory address is 0

After adding new indexes 

Length is 6, capacity is 12, memory address is 3

After pushing in new indexes, index length exceeded capacity so resize added 1 to original length which is 4
and multiplied by Array.SIZE_RATIO which is set to give us a capicity of 12. The memory address or ptr changes as well
to point to memory address 3. 

3. Length is 3, capacity is 12, memory address is 3.
   After running pop() 3 times, it removed the items from the previous indexes at the end of the array which gave us a length of 3.
   Since capacity has not been exceeded, it still remains at 12 along with the current memory address of 3. 

4. NaN was the output. We instantiated memory with Float64Array() method which only accepts integers. The resize() function will take the current ptr position and hold it into a new variable. We call allocate() to find a new space to store the new ptr. Copy the new ptr position from the old ptr position, and add it's length. Call memory.free to free up old space. This.capacity = the new size. 

5.