---
layout: post
title:  "Send email using Powershell"
date:   2016-07-19 11:45:50 -0400
categories: powershell email
---

In a Powershell terminal, set the following:

{% highlight powershell %}
$EmailFrom = "from@somecompany.com"
$EmailTo = "me@mycompany.com"
$Subject = "Test email"
$Body = "Testing to if email server works"
$SMTPServer = "mail.somecompany.com"
$SMTPClient = New-Object Net.Mail.SmtpClient($SMTPServer, 465)
$SMTPClient.EnableSsl = $true
$SMTPClient.Credentials = New-Object System.Net.NetworkCredential("username", "password")
$SMTPClient.Send($EmailFrom, $EmailTo, $Subject, $Body)
{% endhighlight %}

* obviously, use your own settings...