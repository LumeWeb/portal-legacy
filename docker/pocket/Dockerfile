FROM poktnetwork/pocket:beta-latest

RUN /sbin/apk add bash

ADD ./entrypoint.sh /

ENTRYPOINT ["/bin/bash","/entrypoint.sh"]
