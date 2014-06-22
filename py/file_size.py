import sys
import os
test_cases = open(sys.argv[1], 'r')
for test in test_cases:
	if test:
		try:
			print os.path.getsize(test)
		except OSError, e:
			print 0;
test_cases.close()
