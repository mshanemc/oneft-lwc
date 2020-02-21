sfdx force:org:create -f config/project-scratch-def.json -d 1 -s
sfdx force:source:push
sfdx force:apex:execute -f scripts/apex/hello.apex 
sfdx force:org:open -p /lightning/o/Contact/list?filterName=All_Contacts