

/*
Title: Computing and its specific social effects on the coming generation
Imagined, Designed, and Programmed by: Jeannie Moreno
Date: 12/13/17
Description: A website that provides information on how the youth have been using the internet in order to express their ideas and opinions.

Sources of ideas and inspiration (title, author, URL):
 * Youth and internet as sociall tool:
http://www.youthforchange.org/latest-posts/2016/8/12/youth-digital-media-and-activism
 * Social media
https://www.theodysseyonline.com/power-social-media-youth-activists
 *LGBTQ+ Awareness:
http://blog.techimpact.org/lgbt-organizations-use-social-media-social-good/
 *Politics//youth//involvement:
https://www.washingtonpost.com/news/monkey-cage/wp/2016/10/21/when-young-people-get-involved-in-online-communities-it-leads-them-toward-politics/?utm_term=.9af2fd36e9b4
 *Info abt internet history (“1965: Two computers at MIT Lincoln Lab communicate with one another using packet-switching technology.”)
(“1992: The first audio and video are distributed over the Internet. The phrase "surfing the Internet" is popularized.”)
https://www.livescience.com/20727-internet-history.html
 *“After the first supercomputers were created in the 1940s, scientists and engineers began to develop ways to create networks between those computers, and this would later lead to the birth of the Internet.”
https://smallbiztrends.com/2013/05/the-complete-history-of-social-media-infographic.html
 * (2014, 25 milestones in internet history)
https://www.salon.com/2014/03/14/25_biggest_moments_in_internet_history_partner/
 *Information about Facebook
 http://www.convinceandconvert.com/social-media-strategy/how-social-media-has-evolved/


Includes code from (title, author, URL):
 * My brother, he helped me with a lot of my code
 * Ruby, gave me some guidance
 * Money emoji:
 https://emojiisland.com/products/money-with-wings-emoji-icon
 * speaker emoji
 https://github.com/Crissov/unicode-proposals/issues/287
 * brain png
 http://33.media.tumblr.com/7bb416293045685b74255f1a52368f61/tumblr_mg6z0wKUj51rgpyeqo1_500.png
 * prohibited/ red circle with slash png
 https://i.pinimg.com/originals/e1/49/e6/e149e6ebd88b35233c6ebff75a6c81b7.png
 * hand with bulls ears
 https://emojiisland.com/products/sign-of-the-horns-emoji-icon-1
 * genz logo
 https://fs12.formsite.com/pmeevents/images/GenZlogo_web_symbol_5522ff.png taken from this site: http://www.genzconference.com/speaker-registration
*/


slider = document.getElementById('slider');
timeline = document.getElementById('timeline');
console.log(slider);

function setup() {
	// text = document.createElement('h4');
	// text.appendChild(document.createTextNode('THIS GOES INTO THE TIMELINE'));
	// timeline.appendChild(text);
}

function addText(e) {
	if (slider.value > 20 && slider.value < 40 && document.getElementsByClassName('first').length === 0) {
		text = document.createElement('h4');
		text.classList.add('first');
		text.appendChild(document.createTextNode('1965- First form of internet interaction '));
		text.appendChild(document.createTextNode('Two computers at MIT Lincoln Lab communicate with one another using packet-switching technology'));
		timeline.appendChild(text);
	} else if (slider.value > 40 && slider.value < 60 && document.getElementsByClassName('second').length === 0) {
		text = document.createElement('h4');
		text.classList.add('second');
		text.appendChild(document.createTextNode('1992- The first audio and video are distributed over the Internet '));
		text.appendChild(document.createTextNode('a scanned .gif version of a shot of CERN’s house band, Les Horribles Cernette was shared'));
		timeline.appendChild(text);
	} else if (slider.value > 60 && slider.value < 80 && document.getElementsByClassName('third').length === 0) {
		text = document.createElement('h4');
		text.classList.add('third');
		text.appendChild(document.createTextNode('1994- The world’s first blog  '));
		text.appendChild(document.createTextNode("Twenty-year-old Justin Hall is credited with creating the world’s first internet-based diary/blog,'justins links'"));
		timeline.appendChild(text);
	} else if (slider.value > 80 && slider.value < 100 && document.getElementsByClassName('fourth').length === 0)  {
		text = document.createElement('h4');
		text.classList.add('fourth');
		text.appendChild(document.createTextNode("2004- Launch of 'The Facebook'  "));
		text.appendChild(document.createTextNode('Mark Zuckerberg launches Facebook from his Harvard doormroom. the era of social networking begins '));
		timeline.appendChild(text);
	} else if (slider.value > 100 && slider.value < 120 && document.getElementsByClassName('fifth').length === 0) {
		text = document.createElement('h4');
		text.classList.add('fifth');
		text.appendChild(document.createTextNode('2011- In order to spread awareness about their current events, young Egyptians do so through social media '));
		text.appendChild(document.createTextNode(' Young Egyptians use the hashtags #Egypt and #Jan25 on Twitter to spread the word about the Egyptian Revolution '));
		timeline.appendChild(text);
	} else if (slider.value > 120 && slider.value < 140 && document.getElementsByClassName('sixth').length === 0) {
		text = document.createElement('h4');
		text.classList.add('sixth');
		text.appendChild(document.createTextNode("2014- the online 'magna carta' is publicized "));
		text.appendChild(document.createTextNode(" An internet bill of rights is called for by Tim Berners Lee so that web users' privacy and free speech is protected"));
		timeline.appendChild(text);
	} else if (slider.value > 140 && slider.value < 160 && document.getElementsByClassName('seventh').length === 0) {
		text = document.createElement('h4');
		text.classList.add('seventh');
		text.appendChild(document.createTextNode("2015- One billion people used facebook in one day "));
		text.appendChild(document.createTextNode(" On August 24, 2015, more than one billion people logged onto this social media platform- 1 in 7 people on earth ! "));
		timeline.appendChild(text);
	} else if (slider.value > 160 && slider.value < 500 && document.getElementsByClassName('eigth').length === 0) {
		text = document.createElement('h4');
		text.classList.add('eigth');
		text.appendChild(document.createTextNode(''));
		timeline.appendChild(text);
	}
}
//^timeline--thanks to my brother for helping me with this

function removeText(e) {
	if (slider.value < 20 && document.getElementsByClassName('first').length === 1) {
		timeline.removeChild(document.getElementsByClassName('first')[0]);
	} else if (slider.value < 40 && document.getElementsByClassName('second').length === 1) {
		timeline.removeChild(document.getElementsByClassName('second')[0]);
	} else if (slider.value < 60 && document.getElementsByClassName('third').length === 1) {
		timeline.removeChild(document.getElementsByClassName('third')[0]);
	} else if (slider.value < 80 && document.getElementsByClassName('fourth').length === 1)  {
		timeline.removeChild(document.getElementsByClassName('fourth')[0]);
	} else if (slider.value < 100 && document.getElementsByClassName('fifth').length === 1) {
		timeline.removeChild(document.getElementsByClassName('fifth')[0]);
	} else if (slider.value < 120 && document.getElementsByClassName('sixth').length === 1) {
		timeline.removeChild(document.getElementsByClassName('sixth')[0]);
	} else if (slider.value < 140 && document.getElementsByClassName('seventh').length === 1) {
		timeline.removeChild(document.getElementsByClassName('seventh')[0]);
	} else if (slider.value < 160 && document.getElementsByClassName('eigth').length === 1) {
		timeline.removeChild(document.getElementsByClassName('eigth')[0]);
	}
}
//to remove the text on the time line-- thanks to my brother for helping me with this
slider.addEventListener('input', addText);
slider.addEventListener('input', removeText);
