gsap.registerPlugin(ScrollTrigger, TextPlugin, Draggable);

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 900,
        easing: 'power3.out',
        once: true,
        mirror: false,
        anchorPlacement: 'top-bottom',
        offset: 60,
    });

    const terminalWindow = document.createElement('div');
    terminalWindow.className = 'terminal-window';
    terminalWindow.id = 'terminal-window';
    terminalWindow.innerHTML = `
        <div class="terminal-header">
            <div class="terminal-title">sulav@portfolio: ~</div>
            <button class="terminal-button-close"></button>
        </div>
        <div class="terminal-body">
            <div class="terminal-output">Wlc to My attempt to remake my Terminal</div>
            <div class="terminal-output">Type 'help' for list of cmds <3</div>
            <div class="terminal-prompt">
                <span class="terminal-prompt-user">sulav@portfolio</span><span class="terminal-prompt-path">~</span><span class="terminal-prompt-symbol">$</span>
                <input type="text" class="terminal-input" autofocus>
            </div>
        </div>
    `;
    document.body.appendChild(terminalWindow);

    const heroTerminalButton = document.getElementById('hero-terminal-button');
    const headerTerminalButton = document.getElementById('header-terminal-button');
    const terminalInput = terminalWindow.querySelector('.terminal-input');
    const terminalBody = terminalWindow.querySelector('.terminal-body');
    const terminalHeader = terminalWindow.querySelector('.terminal-header');
    const terminalCloseButton = terminalWindow.querySelector('.terminal-button-close');

    Draggable.create("#terminal-window", {
        trigger: ".terminal-header",
        type: "x,y",
        bounds: "body",
        cursor: "grabbing",
        activeCursor: "grabbing"
    });

    const commands = {
        help: {
            description: 'Show available commands',
            execute: () => {
                let output = 'Available commands:\n\n';
                Object.keys(commands).forEach(cmd => {
                    output += `<span class="terminal-command">${cmd.padEnd(10, ' ')}</span> - ${commands[cmd].description}\n`;
                });
                output += '\nUse <span class="terminal-command">clear</span> to clear terminal';
                return output;
            }
        },
        about: { description: 'Show about information', execute: () => `Namaste, Ma Sulav Thapa. Just a normal everyday guy whos into computers.\nNot the best at it but I try to love everything I do.\nMade Discord Bots, Websites, Some Cheats for games and so on..\nBut ultimately I just love learning about computers. :D` },
        skills: { description: 'List my technical skills', execute: () => `I wouldnt call my self perfect in anyof these\nBut I can grasp the concepts and solve problems using these:\n- C/C++\n- JavaScript\n- Java\n- Digital Logic\n- Algorithms\n- Problem Solving\n- Qt Framework` },
        projects: { description: 'Show my projects', execute: () => `Projects:\n\nComing soon...\n\n"The ones I have done aren't as perfect as I want them to be."` },
        contact: { description: 'Show contact information', execute: () => `Contact:\n\nEmail: notquiteready@soon.com\nNope not right now at least. :)` },
        clear: {
            description: 'Clear terminal screen',
            execute: () => {
                terminalBody.innerHTML = `<div class="terminal-prompt"><span class="terminal-prompt-user">sulav@portfolio</span><span class="terminal-prompt-path">~</span><span class="terminal-prompt-symbol">$</span><input type="text" class="terminal-input" autofocus></div>`;
                terminalBody.querySelector('.terminal-input').addEventListener('keydown', handleCommand);
                terminalBody.querySelector('.terminal-input').focus();
                return null;
            }
        },
        date: { description: 'Show current date and time', execute: () => new Date().toString() },
        echo: { description: 'Print arguments to terminal', execute: (args) => args.join(' ') },
        ping: { description: 'Ping a host (fake)', execute: (args) => {
            const host = args[0] || 'startpage.com';
            return `PING ${host} (${Math.random() > 0.5 ? '142.250.190.14' : '172.217.160.142'}): 56 data bytes\n64 bytes from ${host}: icmp_seq=0 ttl=118 time=${(Math.random() * 50 + 20).toFixed(2)} ms\n64 bytes from ${host}: icmp_seq=1 ttl=118 time=${(Math.random() * 50 + 20).toFixed(2)} ms\n64 bytes from ${host}: icmp_seq=2 ttl=118 time=${(Math.random() * 50 + 20).toFixed(2)} ms\n--- ${host} ping statistics ---\n3 packets transmitted, 3 packets received, 0% packet loss\nround-trip min/avg/max/stddev = ${(Math.random() * 20 + 20).toFixed(2)}/${(Math.random() * 30 + 30).toFixed(2)}/${(Math.random() * 40 + 40).toFixed(2)}/${(Math.random() * 5 + 5).toFixed(2)} ms`;
        }},
        neofetch: {
description: 'Display system information',
execute: () => `
<span class="terminal-success">        .-/+oossssoo+/-.            </span> <span class="terminal-command">www.thapasulav.info.np</span>
<span class="terminal-success">    :+ssssssssssssssssss+:          </span> ---------------------
<span class="terminal-success">  .:osssssssssssssssssssso:-.       </span> <span class="terminal-command">OS:</span> Endevour OS
<span class="terminal-success"> /osssssssssssssssssssso/:-         </span> <span class="terminal-command">Device:</span> Lenovo Legion
<span class="terminal-success">-ossssssssssssssssssso/:-           </span> <span class="terminal-command">Kernel:</span> 6.14.9
<span class="terminal-success">:ossssssssssssssssssso:-            </span> <span class="terminal-command">GPU:</span> NVIDIA GeForce RTX 4070
<span class="terminal-success">/ossssssssssssssssssso:-            </span> <span class="terminal-command">CPU:</span> Intel i7-14700HX
<span class="terminal-success">:ossssssssssssssssssso:-            </span> <span class="terminal-command">Shell:</span> fish 4.0.2
<span class="terminal-success">-ossssssssssssssssssso:-            </span> <span class="terminal-command">Resolution:</span> ${window.innerWidth}x${window.innerHeight}
<span class="terminal-success"> /ossssssssssssssssssso:-           </span> <span class="terminal-command">DE:</span> GNOME
<span class="terminal-success">  .:osssssssssssssssssssso:-.       </span> <span class="terminal-command">WM:</span> Mutter
<span class="terminal-success">    :+ssssssssssssssssss+:          </span> <span class="terminal-command">Theme:</span> Everforest
<span class="terminal-success">        .-/+oossssoo+/-.            </span> <span class="terminal-command">Icons:</span> Tela-Circle-Dark
<span class="terminal-success">                                    </span> <span class="terminal-command">Terminal:</span> Kitty
    `
},
        sudo: { description: 'Execute command as sudo', execute: () => `<span class="terminal-error">Error: Nope</span>` }
    };

    const openTerminal = () => {
        terminalWindow.classList.add('active');
        gsap.to(terminalWindow, { bottom: '0', left: '50%', x: '-50%', duration: 0.8, ease: 'power4.out' });
        setTimeout(() => terminalWindow.querySelector('.terminal-input').focus(), 100);
    };

    const closeTerminal = () => {
        gsap.to(terminalWindow, { bottom: '-100%', duration: 0.6, ease: 'power4.in', onComplete: () => terminalWindow.classList.remove('active') });
    };

    heroTerminalButton.addEventListener('click', openTerminal);
    headerTerminalButton.addEventListener('click', openTerminal);
    terminalCloseButton.addEventListener('click', closeTerminal);
    
    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const currentInput = e.target;
            const input = currentInput.value.trim();
            currentInput.disabled = true;

            const outputContainer = document.createElement('div');
            outputContainer.className = 'terminal-output';
            
            const args = input.split(' ');
            const cmd = args.shift().toLowerCase();

            let result = '';
            if (commands[cmd]) {
                result = commands[cmd].execute(args);
            } else if (input) {
                result = `<span class="terminal-error">Command not found: ${cmd}</span>`;
            }
            
            if(input) {
                outputContainer.innerHTML = result;
                terminalBody.appendChild(outputContainer);
                gsap.from(outputContainer, { opacity: 0, y: 10, duration: 0.3, ease: 'power2.out' });
            }

            if (cmd !== 'clear') {
                const newPrompt = document.createElement('div');
                newPrompt.className = 'terminal-prompt';
                newPrompt.innerHTML = `<span class="terminal-prompt-user">sulav@portfolio</span><span class="terminal-prompt-path">~</span><span class="terminal-prompt-symbol">$</span><input type="text" class="terminal-input" autofocus>`;
                terminalBody.appendChild(newPrompt);
                const newTerminalInput = newPrompt.querySelector('.terminal-input');
                newTerminalInput.addEventListener('keydown', handleCommand);
                newTerminalInput.focus();
                gsap.from(newPrompt, { opacity: 0, y: 10, duration: 0.3, ease: 'power2.out' });
            }
            
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    };

    terminalInput.addEventListener('keydown', handleCommand);
});

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu');
    const header = document.querySelector('header');
    const currentYearSpan = document.getElementById('current-year');
    const musicButton = document.getElementById('header-music-button');
    const allNavLinks = document.querySelectorAll('a[href^="#"]');
    const animatedTagline = document.getElementById('animated-tagline');
    const pfpImage = document.querySelector('.pfp-image');
    
    const audio = new Audio('forest-lofi.mp3'); 
    audio.loop = true;
    audio.volume = 0.6;
    let isPlaying = false;

    const taglinePhrases = ["A Passionate Creator", "A Chess Player", "A C++ Dev", "A Web Dev", "A Book Enjoyer"];
    let currentPhraseIndex = 0;

    const animateTagline = () => {
        gsap.to(animatedTagline, {
            opacity: 0,
            y: -10,
            duration: 0.4,
            ease: "power2.in",
            onComplete: () => {
                currentPhraseIndex = (currentPhraseIndex + 1) % taglinePhrases.length;
                animatedTagline.textContent = taglinePhrases[currentPhraseIndex];
                gsap.fromTo(animatedTagline, 
                    { opacity: 0, y: 10 }, 
                    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
                );
            }
        });
    };

    setInterval(animateTagline, 3000); 

    const tl = gsap.timeline({defaults: { ease: "power4.out" }});
    tl.to('.hero-line', { y: 0, duration: 0.8, stagger: 0.15, delay: 0.3 });
    tl.fromTo('#hero-button-container', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.7 }, "-=0.5");
    tl.fromTo('.animate-scroll-arrow', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4");

    gsap.to('.animate-scroll-arrow', { y: -10, duration: 1.2, repeat: -1, yoyo: true, ease: 'sine.inOut' });

    if (musicButton) {
        musicButton.addEventListener('click', () => {
            isPlaying = !isPlaying;
            if (isPlaying) {
                audio.play().catch(error => {
                    console.error("Audio playback failed:", error);
                    isPlaying = false;
                    musicButton.classList.remove('playing');
                });
                musicButton.classList.add('playing');
            } else {
                audio.pause();
                musicButton.classList.remove('playing');
            }
        });
    }

    const closeMobileMenu = () => {
        if (!mobileMenuOverlay) return;
        gsap.to(mobileMenuOverlay, { opacity: 0, duration: 0.3, ease: 'power2.in', onComplete: () => { mobileMenuOverlay.classList.add('hidden'); document.body.style.overflow = ''; } });
    };

    const openMobileMenu = () => {
        if (!mobileMenuOverlay) return;
        mobileMenuOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        gsap.fromTo(mobileMenuOverlay, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' });
        gsap.from(mobileMenuOverlay.querySelectorAll('a'), { y: 20, opacity: 0, stagger: 0.1, duration: 0.5, ease: 'power2.out' });
    };

    if (mobileMenuButton) mobileMenuButton.addEventListener('click', openMobileMenu);
    if (closeMobileMenuButton) closeMobileMenuButton.addEventListener('click', closeMobileMenu);

    allNavLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();
                    const offset = 80;
                    const targetY = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({
                        top: targetY,
                        behavior: 'smooth'
                    });
                    if (mobileMenuOverlay && !mobileMenuOverlay.classList.contains('hidden')) {
                        closeMobileMenu();
                    }
                }
            }
        });
    });

    window.addEventListener('scroll', () => {
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 50);
        }
    }, { passive: true });

    if (currentYearSpan) currentYearSpan.textContent = new Date().getFullYear();

    if (pfpImage) {
        pfpImage.classList.add('idle-animation');
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true }); 
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); 
    document.getElementById('three-bg').appendChild(renderer.domElement);
    
    const particles = new THREE.Group();
    scene.add(particles);

    const particleCount = 180;
    const particleVertices = [];
    const particleSize = 0.36; 
    const connectionDistance = 18;
    const maxOpacity = 0.065;

    const colors = [
        new THREE.Color(0x89b482), 
        new THREE.Color(0x7fbbb3), 
        new THREE.Color(0xe69875),
        new THREE.Color(0xa79a83)
    ];

    const particleMaterial = new THREE.MeshBasicMaterial({
        transparent: true,
        blending: THREE.AdditiveBlending 
    });

    const particleGeometry = new THREE.SphereGeometry(particleSize, 8, 8); 

    for (let i = 0; i < particleCount; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const particle = new THREE.Mesh(particleGeometry, particleMaterial.clone());
        particle.material.color = color;
        particle.material.opacity = Math.random() * 0.5 + 0.1;
        
        const x = (Math.random() - 0.5) * 200;
        const y = (Math.random() - 0.5) * 200;
        const z = (Math.random() - 0.5) * 200;
        particle.position.set(x, y, z);
        
        particle.userData.velocity = new THREE.Vector3(
            (Math.random() - 0.5) * 0.01,
            (Math.random() - 0.5) * 0.01,
            (Math.random() - 0.5) * 0.01
        );
        
        particles.add(particle);
        particleVertices.push(particle.position);
    }

    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particleCount * particleCount * 3);
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x7fbbb3,
        transparent: true,
        opacity: maxOpacity, 
        blending: THREE.AdditiveBlending
    });
    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    camera.position.z = 50;
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    function animate() {
        requestAnimationFrame(animate);

        particles.children.forEach(particle => {
            particle.position.add(particle.userData.velocity);
            if (Math.abs(particle.position.x) > 100) particle.position.x *= -1;
            if (Math.abs(particle.position.y) > 100) particle.position.y *= -1;
            if (Math.abs(particle.position.z) > 100) particle.position.z *= -1;
        });
        
        let lineIndex = 0;
        
        for(let i = 0; i < particleCount; i++) {
            for(let j = i + 1; j < particleCount; j++) {
                const dist = particleVertices[i].distanceTo(particleVertices[j]);
                if(dist < connectionDistance) {
                    linePositions[lineIndex++] = particleVertices[i].x;
                    linePositions[lineIndex++] = particleVertices[i].y;
                    linePositions[lineIndex++] = particleVertices[i].z;
                    linePositions[lineIndex++] = particleVertices[j].x;
                    linePositions[lineIndex++] = particleVertices[j].y;
                    linePositions[lineIndex++] = particleVertices[j].z;
                }
            }
        }
        
        lineGeometry.setDrawRange(0, lineIndex / 3); 
        lineGeometry.attributes.position.needsUpdate = true;
        
        const time = Date.now() * 0.0002;
        lineMesh.material.opacity = (Math.sin(time) * 0.25 + 0.75) * maxOpacity;

        camera.position.x += (mouseX * 10 - camera.position.x) * 0.05; 
        camera.position.y += (-mouseY * 10 - camera.position.y) * 0.05; 
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize);
    animate();
});


