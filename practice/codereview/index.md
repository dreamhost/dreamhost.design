---
title: Code review best practice
layout: page
---

<p><strong>Code review best practices:</strong></p>
<ul class="List List--disc m-bottom-2">
	<li>Never review code that you aren’t comfortable with reviewing</li>
	<li>Code reviews are for code only. Don’t review design, copy, etc.</li>
<li>If you don’t understand something about the code, always leave a comment</li>
<li><strong>Do not</strong> +2 a review unless you fully comprehend what the code is doing</li>
<li>Reply to Slack <a href="https://dreamhost.slack.com/messages/C0Y9A505A" terget="_blank">#design_review</a> requests by starting a thread, to keep things organized</li>
<li>If you reviewed a piece of work and didn't leave any comments, review it again.</li>
</ul>
<p><strong>Blockers (you would -1 or -2 for these things):</strong></p>
<ul class="List List--disc m-bottom-2">
	<li>Bugs</li>
	<li>Improper indenting</li>
	<li>Bad/no commit message</li>
	<li>Unclear naming conventions for classes, functions, or variables</li>
	<li>Typos</li>
	<li>No link to jira ticket when ticket is available</li>
	<li>Code that impacts the look and feel but has not first undergone a design review</li>
	<li>Adding new components that already exist in DreamHost.css</li>
</ul>
<p><strong>Non-blockers (you might leave a comment but still +2):</strong></p>
<ul class="List List--disc m-bottom-2">
	<li>Style issues</li>
	<li>Copy/wording issues</li>
	<li>The design</li>
</ul>

<p><strong>Commit best practices:</strong></p>
<ul class="List List--disc">
	<li><strong>Do not</strong> merge a review than hasn’t first been +2 by a peer</li>
	<li>Commit messages should summarize the commit on the first line, and provide clear details about what is being added/changed on subsequent lines as necessary</li>
	<li>It’s a good idea to work on remote branches as often as possible</li>
	<li>Only commit to master when you are ready for deployment</li>
	<li class="m-left-6">This means that all peer comments have been addressed in some way</li>
	<li>Don’t waste someone else’s time with a merge commit that has no code changes or conflicts</li>
	<li>Use obvious naming conventions for classes, functions, and variables so that other developers can easily read your code. If it’s still confusing, then add comments</li>
	<li>Break up code reviews into sensibly digestible chunks</li>
	<li>Any code that impacts look and feel should undergo a design review before being committed.</li>

