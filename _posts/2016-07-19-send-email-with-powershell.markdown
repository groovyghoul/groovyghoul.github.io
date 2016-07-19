---
layout: post
title:  "Send email using Powershell"
date:   2016-07-19 14:45:50 -0400
categories: powershell email
---

In a Powershell terminal, set the following:

{% highlight powershell %}
C:\&gt; $EmailFrom = "from@somecompany.com"
C:\&gt; $EmailTo = "me@mycompany.com"
C:\&gt; $Subject = "Test email"
C:\&gt; $Body = "Testing to if email server works"
C:\&gt; $SMTPServer = "mail.somecompany.com"
C:\&gt; $SMTPClient = New-Object Net.Mail.SmtpClient($SMTPServer, 465)
C:\&gt; $SMTPClient.EnableSsl = $true
C:\&gt; $SMTPClient.Credentials = New-Object System.Net.NetworkCredential("username", "password")
C:\&gt; $SMTPClient.Send($EmailFrom, $EmailTo, $Subject, $Body)
{% endhighlight %}

* obviously, use your own settings...