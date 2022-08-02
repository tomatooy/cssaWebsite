import React from 'react'
import './css/uga-footer.css'
export default function UGAfooter() {
  return (
	<div>
		<footer class="ugafooter">
			<div class="ugafooter__container">
				<div class="ugafooter__row ugafooter__row--primary">                    
					<div class="ugafooter__logo">
					   <a class="ugafooter__logo-link" href="https://www.uga.edu/">University of Georgia</a>
					</div>
					<nav class="ugafooter__links">
						<ul class="ugafooter__links-list">
							<li class="ugafooter__links-list-item">
								<a class="ugafooter__links-list-link" href="https://www.uga.edu/a-z/schools/">Schools and Colleges</a>
							</li>
							<li class="ugafooter__links-list-item">
								<a class="ugafooter__links-list-link" href="https://peoplesearch.uga.edu/">Directory</a>
							</li>
							<li class="ugafooter__links-list-item">
								<a class="ugafooter__links-list-link" href="https://my.uga.edu/">MyUGA</a>
							</li>
							<li class="ugafooter__links-list-item">
								<a class="ugafooter__links-list-link" href="http://hr.uga.edu/applicants/">Employment Opportunities</a>
							</li>
							<li class="ugafooter__links-list-item">
								<a class="ugafooter__links-list-link" href="https://mc.uga.edu/policy/trademark">Copyright and Trademarks</a>
							</li>
							<li class="ugafooter__links-list-item">
								<a class="ugafooter__links-list-link" href="https://eits.uga.edu/access_and_security/infosec/pols_regs/policies/privacy/">Privacy</a>
							</li>
						</ul>
					</nav>
				</div>
				<div class="ugafooter__row ugafooter__row--secondary">
					<nav class="ugafooter__social">
						<span class="ugafooter__social-label">#UGA on</span>
						<a class="ugafooter__social-link" aria-label="UGA on Facebook" href="https://www.facebook.com/universityofga/">
							<i class="fab fa-fw fa-facebook-f" title="Facebook" aria-hidden></i>
						</a>
						<a class="ugafooter__social-link" aria-label="UGA on Twitter" href="https://twitter.com/universityofga">
							<i class="fab fa-fw fa-twitter" title="Twitter" aria-hidden></i>
						</a>
						<a class="ugafooter__social-link" aria-label="UGA on Instagram" href="https://www.instagram.com/universityofga/">
							<i class="fab fa-fw fa-instagram" title="Instagram" aria-hidden></i>
						</a>
						<a class="ugafooter__social-link" aria-label="UGA on Snapchat" href="https://www.snapchat.com/add/university-ga">
							<i class="fab fa-fw fa-snapchat-ghost" title="Snapchat" aria-hidden></i>
						</a>
						<a class="ugafooter__social-link" aria-label="UGA on YouTube" href="https://www.youtube.com/user/UniversityOfGeorgia">
							<i class="fab fa-fw fa-youtube" title="YouTube" aria-hidden></i>
						</a>
						<a class="ugafooter__social-link" aria-label="UGA on LinkedIn" href="https://www.linkedin.com/school/university-of-georgia/">
							<i class="fab fa-fw fa-linkedin-in" title="LinkedIn" aria-hidden></i>
						</a>
					</nav>
					<div class="ugafooter__address">
						&copy; University of Georgia, Athens, GA 30602 <br />
						706&#8209;542&#8209;3000
					</div>
				</div>
			</div>
		</footer>
		<script src="./js/uga-footer.js"></script>
	</div>
  )
}


