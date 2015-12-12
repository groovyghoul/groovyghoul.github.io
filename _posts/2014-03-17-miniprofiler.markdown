At work we were having trouble with the amount of time one of our pages was taking to move forward. To be fair, this page was doing a lot of work and posting a lot of data in one shot, but it really shouldn't have been taking upwards of 15-20 seconds.

Using the normal means ([Fiddler](http://www.telerik.com/fiddler), [Glimpse](http://getglimpse.com/), [Chrome tools](https://developers.google.com/chrome-developer-tools/), etc), we were still having trouble pinpointing the problem. We ruled out the [jQuery](http://jquery.com/) validator, JSON serializing and the action method in our controller.

So along came [MiniProfiler](http://miniprofiler.com/) to the rescue.

To start, use [Nuget](http://www.nuget.org/) to install MiniProfiler into the project. From the Project Management Console, type:

{% highlight powershell %}
Install-Package MiniProfiler.MVC3
{% endhighlight %}

A new file called `MiniProfiler.cs` will be added to the `App_Start` folder. Looking in the `Init()` method in the `MiniProfilerStartupModule` class, code has already been added to limit MiniProfiler to run for local requests only. We wanted to take this one extra step and add configuration to shut it completely off when the application goes into the wild, but give us the ability to turn it on at a client site, just in case.

In the `web.config` file, we added:

{% highlight xml %}
<appSettings>
     ...
     <add key="ga:profiler" value="true" />
</appSettings>
{% endhighlight %}

In the `MiniProfiler.cs` file, we built a new method to access this configuration setting:

{% highlight csharp %}
private static bool ProfilerConfiguredToRun()
{
    return System.Configuration.ConfigurationManager.AppSettings["ga:profiler"] == "false";
}
{% endhighlight %}

We updated the `Init()` method to look like:

{% highlight csharp %}
public void Init(HttpApplication context)
{
    context.BeginRequest += (sender, e) =>
    {
        var request = ((HttpApplication)sender).Request;
        if (request.IsLocal && ProfilerConfiguredToRun()) 
            MiniProfiler.Start(); 
    };

    context.EndRequest += (sender, e) =>
    {
        MiniProfiler.Stop();
    };
}
{% endhighlight %}

To place a `wrapper` around every request, you could add something like:

{% highlight csharp %}
protected void Application_BeginRequest(object sender, EventArgs e)
{
    var profiler = MiniProfiler.Current;

    using (profiler.Step("Begin Request")) { }
}

protected void Application_EndRequest(object sender, EventArgs e)
{
    var profiler = MiniProfiler.Current;

    using (profiler.Step("End Request")) { }
}
{% endhighlight %}

To profile a method, perhaps a controller action, 

{% highlight csharp %}
public ActionResult SomeAction(ViewModel viewmodel)
{
    var profiler = MiniProfiler.Current;
    using (profiler.Step("Step 1: Saving"))
    {
        using (profiler.Step("Step 1: Saving"))
        {
            var application = _service.Load(viewmodel.Id);
        }
        
        var path = Url.Action("Finish", "Appl", new { area = "Cust" });
        return Json(new { success = true, appl = application, pathNext = myPath });
    }
}
{% endhighlight %}

When your application runs, you should now see your profiler results in the upper left corner of your browser window. 

During this little adventure, one more problem cropped up regarding the sheer size of the data that we were trying to send through the profiler. It was actually maxing out what was allowed over the pipe.

To temporarily get around this, add the following to `Application_Start()` in the `global.asax.cs` file (comment or remove this when you are done with it):

{% highlight csharp %}
MiniProfiler.Settings.MaxJsonResponseSize = int.MaxValue;
{% endhighlight %}

Hopefully this provides a good starting point for the next person that may need to jump in and use `MiniProfiler`.