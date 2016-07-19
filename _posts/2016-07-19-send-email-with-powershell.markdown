---
layout: post
title:  "Send email using Powershell"
date:   2016-07-19 14:45:50 -0400
categories: powershell email
---

In a Powershell terminal, set the following:

{% highlight powershell %}
C:\> $EmailFrom = "from@somecompany.com"
C:\> $EmailTo = "me@mycompany.com"
C:\> $Subject = "Test email"
C:\> $Body = "Testing to if email server works"
C:\> $SMTPServer = "mail.somecompany.com"
C:\> $SMTPClient = New-Object Net.Mail.SmtpClient($SMTPServer, 465)
C:\> $SMTPClient.EnableSsl = $true
C:\> $SMTPClient.Credentials = New-Object System.Net.NetworkCredential("username", "password")
C:\> $SMTPClient.Send($EmailFrom, $EmailTo, $Subject, $Body)
{% endhighlight %}

* obviously, use your own settings...