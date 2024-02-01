# awesome-satellite-network
This repo collects academic papers/open-source projects/conference talks/frameworks/tools related to the research of satellite networks.

## Table of Content
- [Full papers](https://github.com/liuwei-network/awesome-satellite-network#full-papers)
	- [Routing/Topology](https://github.com/liuwei-network/awesome-satellite-network#routingtopology)
	- [Security](https://github.com/liuwei-network/awesome-satellite-network#security)
	- [Measurement](https://github.com/liuwei-network/awesome-satellite-network#measurement)
	- [Earth Observation Satellites](https://github.com/liuwei-network/awesome-satellite-network#earth-observation-satellites)
	- [Transport](https://github.com/liuwei-network/awesome-satellite-network#transport)
	- [Edge Computing](https://github.com/liuwei-network/awesome-satellite-network#edge-computing)
	- [Satellite IoT](https://github.com/liuwei-network/awesome-satellite-network#satellite-iot)
	- [Hardware](https://github.com/liuwei-network/awesome-satellite-network#hardware)
	- [Platform](https://github.com/liuwei-network/awesome-satellite-network#platform)
- [Workshops](https://github.com/liuwei-network/awesome-satellite-network#workshops)
- [Tutorials](https://github.com/liuwei-network/awesome-satellite-network#tutorials)
- [Projects](https://github.com/liuwei-network/awesome-satellite-network#projects)
- [Datasets](https://github.com/liuwei-network/awesome-satellite-network#datasets)

## Full papers

### Routing/Topology
- [A Networking Perspective on Starlink’s Self-Driving LEO Mega-Constellation](https://dl.acm.org/doi/10.1145/3570361.3592519) (MobiCom 23)
- [Achieving Resilient and Performance-Guaranteed Routing in Space-Terrestrial Integrated Networks](https://ieeexplore.ieee.org/abstract/document/10229104) (INFOCOM 23)
- [Enabling Low-latency-capable Satellite-Ground Topology for Emerging LEO Satellite Networks](https://ieeexplore.ieee.org/document/9796886) (INFOCOM 22)
- [Geographic Low-Earth-Orbit Networking without QoS Bottlenecks from Infrastructure Mobility](https://ieeexplore.ieee.org/document/9812903) (IWQoS 22)
- [Towards Sustainable Multi-Tier Space Networking for LEO Satellite
Constellations](https://ieeexplore.ieee.org/document/9812872) (IWQoS 22) (Best Paper Award Runner-up)
- [Mobility- and Load-Adaptive Controller Placement and Assignment in LEO Satellite Networks](https://ieeexplore.ieee.org/document/9488806) (INFOCOM 21)
- [“Internet from Space” without Inter-satellite Links](https://dl.acm.org/doi/10.1145/3422604.3425938) (HotNets 20)
- [Dynamically Adaptive Cooperation Transmission among Satellite-Ground Integrated Networks](https://ieeexplore.ieee.org/document/9155485) (INFOCOM 20)
- [Network topology design at 27,000 km/hour](https://dl.acm.org/doi/10.1145/3359989.3365407) (CoNEXT 19)
- [Using ground relays for low-latency wide-area routing in megaconstellations](https://dl.acm.org/doi/10.1145/3365609.3365859) (HotNets 19)
- [Delay is Not an Option: Low Latency Routing in Space](https://dl.acm.org/doi/10.1145/3286062.3286075) (HotNets 18)
- [Networking in Heaven as on Earth](https://dl.acm.org/doi/10.1145/3286062.3286066) (HotNets 18)
- [Gearing up for the 21st century space race](https://dl.acm.org/doi/10.1145/3286062.3286079) (HotNets 18)

### Security

#### Location Privacy
- [RECORD: A RECeption-Only Region Determination Attack on LEO Satellite Users](https://www.usenix.org/conference/usenixsecurity24/presentation/jedermann) (USENIX Security 24)
- [Don't Shoot the Messenger: Localization Prevention of Satellite Internet Users](https://www.computer.org/csdl/proceedings-article/sp/2024/313000a066/1RjEaCUhdxm) (S&P 24)

#### Software Security
- [Space Odyssey: An Experimental Software Security Analysis of Satellites](https://jwillbold.com/paper/willbold2023spaceodyssey.pdf) (S&P 23)(Distinguished Paper Awards)
- [SOS: Isolated Health Monitoring System to Save Our Satellites](https://dl.acm.org/doi/10.1145/3458864.3466862) (Mobisys 21)

#### DDoS
- [ICARUS: Attacking Low Earth Orbit Satellite Networks](https://www.usenix.org/conference/atc21/presentation/giuliari) (USENIX ATC 21)

#### Physical Security
- [Mars Attacks! Software Protection Against Space Radiation](https://conferences.sigcomm.org/hotnets/2023/papers/hotnets23_wang.pdf)(HotNets 23)
- [On Detecting Deception in Space Situational Awareness](https://dl.acm.org/doi/10.1145/3433210.3453081) (Asia CCS 21)


#### Protocol Security
- [A Tale of Sea and Sky On the Security of Maritime VSAT Communications](https://ieeexplore.ieee.org/document/9152624/keywords#keywords) (S&P 20)
- [Don’t Trust Satellite Phones:
A Security Analysis of Two Satphone Standards](https://www.ieee-security.org/TC/SP2012/papers/4681a128.pdf) (S&P 12)

#### Trust
- [V'CER: Efficient Certificate Validation in Constrained Networks](https://www.usenix.org/conference/usenixsecurity22/presentation/koisser) (USENIX Security 22)
- [Orbit-based Authentication Using TDOA Signatures in Satellite Networks](https://dl.acm.org/doi/abs/10.1145/3448300.3469132) (WiSec 21)

#### Energy Attack
- [Energy Drain Attack in Satellite Internet Constellations](https://ieeexplore.ieee.org/document/10188709) (IWQoS 23)

#### Spoofing
- [Watch This Space: Securing Satellite Communication through Resilient Transmitter Fingerprinting](https://dl.acm.org/doi/10.1145/3576915.3623135) (CCS 23)
- [Satellite Spoofing from A to Z: On the Requirements of Satellite Downlink Overshadowing Attacks](https://dl.acm.org/doi/abs/10.1145/3558482.3590190) (WiSec 23)

### Measurement

- [Don’t Forget the User: It’s Time to Rethink Network Measurements](https://conferences.sigcomm.org/hotnets/2023/papers/hotnets23_taneja.pdf) (HotNets 23)
- [LEO Satellite vs. Cellular Networks: Exploring the Potential for Synergistic Integration](https://dl.acm.org/doi/abs/10.1145/3624354.3630588) (CoNEXT 23)
- [Making Sense of Constellations: Methodologies for Understanding Starlink's Scheduling Algorithms](https://dl.acm.org/doi/10.1145/3624354.3630586) (CoNEXT 23)
- [Dissecting the Performance of Satellite Network Operators](https://dl.acm.org/doi/10.1145/3629137) (CoNEXT 23)
- [Network Characteristics of LEO Satellite Constellations: A Starlink-Based Measurement from End Users](https://ieeexplore.ieee.org/abstract/document/10228912) (INFOCOM 23)
- [A First Look at Starlink Performance](https://dl.acm.org/doi/10.1145/3517745.3561416) (IMC 22)
- [A Browser-side View of Starlink Connectivity](https://dl.acm.org/doi/10.1145/3517745.3561457) (IMC 22)
- [When satellite is all you have: watching the internet from 550 ms](https://dl.acm.org/doi/abs/10.1145/3517745.3561432) (IMC 22)


### Earth Observation Satellites
- [Known Knowns and Unknowns: Near-realtime Earth Observation Via Query Bifurcation in Serval](https://deepakv.web.illinois.edu/assets/papers/serval_nsdi24.pdf) (NSDI 24)
- [Transmitting, Fast and Slow: Scheduling Satellite Traffic through Space and Time](https://dl.acm.org/doi/abs/10.1145/3570361.3592521) (MobiCom 23)
- [UbiPose: Towards Ubiquitous Outdoor AR Pose Tracking using Aerial Meshes](https://dl.acm.org/doi/10.1145/3570361.3613263) (Mobicom 23)
- [FALCON: Towards Fast and Scalable Data Delivery for Emerging Earth Observation Constellations](https://ieeexplore.ieee.org/abstract/document/10228910) (INFOCOM 23)
- [L2D2: Low Latency Distributed Downlink for Low Earth Orbit Satellites](https://dl.acm.org/doi/10.1145/3452296.3472932) (SIGCOMM 21)
- [OrbitCast: Exploiting Mega-Constellations for Low-Latency Earth Observation](https://icnp21.cs.ucr.edu/papers/icnp21camera-paper56.pdf) (ICNP 21)
- [A Distributed and Hybrid Ground Station Network for Low Earth Orbit Satellites](https://dl.acm.org/doi/10.1145/3422604.3425926) (HotNets 20)

### Transport
- [SaTCP: Link-Layer Informed TCP Adaptation for Highly Dynamic LEO Satellite Networks](https://ieeexplore.ieee.org/abstract/document/10228914) (INFOCOM 23)
- [SPACERTC: Unleashing the Low-latency Potential of Mega-constellations for Real-Time Communications](https://ieeexplore.ieee.org/document/9796887) (INFOCOM 22)
- [Time-Varying Resource Graph Based Resource Model for Space-Terrestrial Integrated Networks](https://ieeexplore.ieee.org/document/9488855) (INFOCOM 21)
- [Cooperatively Constructing Cost-Effective Content Distribution Networks upon Emerging Low Earth Orbit Satellites and Clouds
](https://icnp21.cs.ucr.edu/papers/icnp21camera-paper55.pdf) (ICNP 21)
- [Lightweight Retransmission for Random Access in Satellite Networks](https://ieeexplore.ieee.org/document/8485806) (INFOCOM 18)


### Edge Computing
- [Deciphering the Enigma of Satellite Computing with COTS Devices: Measurement and Analysis](https://arxiv.org/abs/2401.03435) (Mobicom 24)
- [In-orbit Computing: An Outlandish thought Experiment?](https://dl.acm.org/doi/pdf/10.1145/3422604.3425937) (HotNets 20)

### Satellite IoT
- [Spectrumize: Spectrum-efficient Satellite Networks for the Internet of Things
](https://deepakv.web.illinois.edu/assets/papers/spectrumize_nsdi24.pdf) (NSDI 24)

### Hardware
- [PMSat: Optimizing Passive Metasurface for Low Earth Orbit Satellite Communication](https://dl.acm.org/doi/10.1145/3570361.3613257) (Mobicom 23)
- [Towards Dual-band Reconfigurable Metamaterial Surfaces for Satellite Networking](https://conferences.sigcomm.org/hotnets/2022/papers/hotnets22_cho.pdf) (HotNets 22)
- [Hummingbird: Energy Efficient GPS Receiver for Small Satellites](https://dl.acm.org/doi/10.1145/3372224.3380886) (Mobicom 20)

### Platform
- [StarryNet: Empowering Researchers to Evaluate Futuristic Integrated Space and Terrestrial Networks](https://www.usenix.org/conference/nsdi23/presentation/lai-zeqi) (NSDI 23)
- [A community-driven approach to democratize access to satellite ground stations](https://dl.acm.org/doi/10.1145/3447993.3448630) (MobiCom 21)
- [StarPerf: Characterizing Network Performance for Emerging Mega-Constellations](https://icnp20.cs.ucr.edu/proceedings/main/StarPerf.pdf) (ICNP 20)

## Workshops
- [Workshop on Security of Space and Satellite Systems (SpaceSec)](https://www.ndss-symposium.org/ndss-program/spacesec-2023/) (NDSS 23)
- [LEO-NET 2023 The 1st ACM Workshop on LEO Networking and Communication 2023](https://leo-net-workshop.github.io/2023/) (Mobicom 23)
- [1st ACM Workshop on Satellite Networking and Computing (SatCom)](https://soar.group/satcom23/) (Mobicom 23)
- [First Workshop on 6G Enablers: Satellite, Qualitative and Semantic Communications](https://qualitativesemantic.wordpress.com) (ICNP 23)

## Tutorials
- [Integrated Satellite-Terrestrial Network (ISTN)](https://conferences.sigcomm.org/sigcomm/2021/ISTN-tutorial.html) (SIGCOMM 21)

## Projects 

### Simulator
- [CosmicBeats Simulator](https://github.com/microsoft/CosmicBeats-Simulator)
- [StarryNet](https://github.com/SpaceNetLab/StarryNet)
- [StarPerf](https://github.com/SpaceNetLab/StarPerf_Simulator)
- [6GSPACELab](https://6gspacelab.uni.lu/5GforSpace)

### Visualization
- [Starlink.sx](https://starlink.sx)
- [See Starlink](https://james.darpinian.com/satellites/?special=starlink)
- [Satellitemap.space](https://satellitemap.space)

### Orbit
- [Skyfield](https://rhodesmill.org/skyfield/)
- [ESA's Space Debris Software](https://sdup.esoc.esa.int)

## Dataset
### Orbit data
- [Space-track](https://www.space-track.org/)
- [Celetrack](https://celestrak.com)