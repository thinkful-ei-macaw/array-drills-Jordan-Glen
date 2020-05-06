2. push method
length is 1, capacity is 3, ptr or memory address is 0

After adding new indexes 

Length is 6, capacity is 12, memory address is 3

After pushing in new indexes, index length exceeded capacity so resize added 1 to original length which is 4
and multiplied by Array.SIZE_RATIO which is set to give us a capicity of 12. The memory address or ptr changes as well
to point to memory address 3. 