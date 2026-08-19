<p align="center">
  <img src="assets/satellite-network-banner.png" alt="Low-Earth-orbit satellites connected to ground stations" width="100%">
</p>

<h1 align="center">Awesome Satellite Networking 🛰️</h1>

<p align="center">
  <strong>A curated collection of papers, open-source systems, datasets, testbeds, and tools for satellite networking and non-terrestrial networks.</strong>
</p>

<p align="center">
  <a href="#papers-by-topic"><img src="https://img.shields.io/badge/papers-184-00bcd4" alt="184 papers"></a>
  <a href="#research-topics"><img src="https://img.shields.io/badge/topics-17-6f42c1" alt="17 topics"></a>
  <a href="https://github.com/liuwei-network/awesome-satellite-network/stargazers"><img src="https://img.shields.io/github/stars/liuwei-network/awesome-satellite-network?style=social" alt="Star this repository on GitHub"></a>
  <a href="https://github.com/liuwei-network/awesome-satellite-network/commits/master"><img src="https://img.shields.io/github/last-commit/liuwei-network/awesome-satellite-network?color=1976d2" alt="Last commit"></a>
</p>

<p align="center"><sub>⭐ Found this collection useful? A star is always welcome!</sub></p>

<p align="center">
  <a href="#papers-by-topic">Papers by Topic</a>&nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="PAPERS_BY_VENUE.md">Papers by Venue</a>&nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#projects">Projects</a>&nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#tools">Tools</a>&nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#datasets">Datasets</a>
</p>

## At a Glance

<table>
  <tr>
    <td align="center" width="20%">📚<br><strong>188 Papers</strong><br><sub>Peer-reviewed conference work</sub></td>
    <td align="center" width="20%">🧭<br><strong>17 Topics</strong><br><sub>Peer-level research themes</sub></td>
    <td align="center" width="20%">🧩<br><strong>16 Projects</strong><br><sub>Open-source systems</sub></td>
    <td align="center" width="20%">🛠️<br><strong>12 Tools</strong><br><sub>Research utilities</sub></td>
    <td align="center" width="20%">🗂️<br><strong>28 Datasets</strong><br><sub>Public research data</sub></td>
  </tr>
</table>

## Recent Additions

- [CommSAR: Enabling Bidirectional Communication in SAR Imaging Satellites via Shared Waveform](https://dl.acm.org/doi/10.1145/3789240.3829144) — `SIGCOMM 2026` · `Physical Layer` · `Ground Segment`
- [Planet-Scale IoT Connectivity via LEO Satellites](https://dl.acm.org/doi/10.1145/3789240.3829147) — `SIGCOMM 2026` · `Satellite IoT` · `Measurement`
- [Dissecting the StarLink: Characterizing Queuing and Flow Dynamics in the Starlink Network](https://dl.acm.org/doi/10.1145/3789240.3829162) — `SIGCOMM 2026` · `Measurement` · `Transport`
- [Achieving Efficient Storage and Communication via Collaboration](https://dl.acm.org/doi/10.1145/3789240.3829176) — `SIGCOMM 2026` · `Space Computing` · `Sensing` · `Resource Management`

- [Seamless Inter-Constellation Sharing via Handover-Aware Space-Ground Association](https://doi.org/10.1109/INFOCOM59046.2026.11571351) — `INFOCOM 2026` · `Architecture` · `Mobility` · `Resource Management`
- [PMPS: Predictive Multi-Path Scheduling for Handover-Free LEO Communications](https://doi.org/10.1109/INFOCOM59046.2026.11571684) — `INFOCOM 2026` · `Routing` · `Mobility` · `Resource Management`
- [SaTor: Exploring Satellite Routing in Tor to Reduce Latency](https://ieeexplore.ieee.org/abstract/document/11573531) — `S&P 2026` · `Routing` · `Security`
- [KubeSpace: A Low-Latency and Stable Control Plane for LEO Satellite Container Orchestration](https://ieeexplore.ieee.org/document/11571195) — `INFOCOM 2026` · `Mobility` · `Resource Management` · `Space Computing`
- [A Variegated Look at Direct-to-Cell Satellites in the Wild](https://dl.acm.org/doi/10.1145/3788086) — `SIGMETRICS 2026` · `Direct-to-Cell` · `Measurement`
- [SERENADE: A Digital Twin Emulator for LEO Satellite Networking At-Scale](https://dl.acm.org/doi/10.1145/3774906.3802777) — `SenSys 2026` · `Experimental Platforms`

## Research Topics

The collection uses 17 peer-level topics. The grid is a navigation index rather than a hierarchy.

<table>
  <tr>
    <td align="center" width="33%" valign="top">🏗️ <a href="#architecture"><strong>Architecture</strong></a><br><sub>Network models and constellation architectures</sub></td>
    <td align="center" width="33%" valign="top">🕸️ <a href="#topology"><strong>Topology</strong></a><br><sub>Constellation and link-topology design</sub></td>
    <td align="center" width="33%" valign="top">🧭 <a href="#routing"><strong>Routing</strong></a><br><sub>Path selection and traffic engineering</sub></td>
  </tr>
  <tr>
    <td align="center" valign="top">🔄 <a href="#mobility"><strong>Mobility</strong></a><br><sub>Handover and mobility management</sub></td>
    <td align="center" valign="top">⚙️ <a href="#resource-management"><strong>Resource Management</strong></a><br><sub>Allocation, scheduling, and orchestration</sub></td>
    <td align="center" valign="top">📡 <a href="#ground-segment"><strong>Ground Segment</strong></a><br><sub>Ground stations, gateways, and downlinks</sub></td>
  </tr>
  <tr>
    <td align="center" valign="top">📱 <a href="#direct-to-cell"><strong>Direct-to-Cell</strong></a><br><sub>Satellite access for mobile devices</sub></td>
    <td align="center" valign="top">〰️ <a href="#physical-layer"><strong>Physical Layer</strong></a><br><sub>Radio, antennas, signals, and access</sub></td>
    <td align="center" valign="top">🚚 <a href="#transport"><strong>Transport</strong></a><br><sub>Congestion control and reliable delivery</sub></td>
  </tr>
  <tr>
    <td align="center" valign="top">📊 <a href="#measurement"><strong>Measurement</strong></a><br><sub>Operational networks and user performance</sub></td>
    <td align="center" valign="top">🧠 <a href="#space-computing"><strong>Space Computing</strong></a><br><sub>In-orbit computing and orchestration</sub></td>
    <td align="center" valign="top">🌍 <a href="#sensing"><strong>Sensing</strong></a><br><sub>Remote sensing and on-orbit analytics</sub></td>
  </tr>
  <tr>
    <td align="center" valign="top">🔋 <a href="#satellite-iot"><strong>Satellite IoT</strong></a><br><sub>Low-power satellite IoT connectivity</sub></td>
    <td align="center" valign="top">▶️ <a href="#content-delivery"><strong>Content Delivery</strong></a><br><sub>CDNs, streaming, and multimedia delivery</sub></td>
    <td align="center" valign="top">🔐 <a href="#security"><strong>Security</strong></a><br><sub>Attacks, privacy, authentication, and defenses</sub></td>
  </tr>
  <tr>
    <td align="center" valign="top">🛡️ <a href="#reliability"><strong>Reliability</strong></a><br><sub>Failures, radiation, and survivability</sub></td>
    <td align="center" valign="top" colspan="2">🧪 <a href="#experimental-platforms"><strong>Experimental Platforms</strong></a><br><sub>Simulators, emulators, digital twins, and testbeds</sub></td>
  </tr>
</table>

## Papers by Topic

Papers are listed under a primary topic and may also appear in additional topics when they make a substantial cross-topic contribution. Intentional duplication is limited to clear cases.

### Architecture
- [CrowdLink: Unlocking Idle LEO Network Capacity with User Terminals](https://nines-conference.org/papers/p028-Liu.pdf) — `NINeS 2026`
- [Seamless Inter-Constellation Sharing via Handover-Aware Space-Ground Association](https://doi.org/10.1109/INFOCOM59046.2026.11571351) — `INFOCOM 2026`
- [The Invisible Hand: Regaining Control of Service Quality from Outsourced Satellite Networks](https://ieeexplore.ieee.org/document/11571494) — `INFOCOM 2026`
- [A Holistic Approach to Non-Terrestrial 5G Networking with LEO Satellites: Algorithms, Experiments, and Insights](https://dl.acm.org/doi/abs/10.1145/3769001) — `CoNEXT 2025`
- [QuESat: Satellite-Assisted Quantum Internet for Global-Scale Entanglement Distribution](https://ieeexplore.ieee.org/document/11044649/) — `INFOCOM 2025`
- [A Call for Decentralized Satellite Networks](https://dl.acm.org/doi/10.1145/3696348.3696896) — `HotNets 2024`
- [A Road map for the Democratization of Space-Based Communications](https://dl.acm.org/doi/10.1145/3696348.3696866) — `HotNets 2024`
- [A Networking Perspective on Starlink’s Self-Driving LEO Mega-Constellation](https://dl.acm.org/doi/10.1145/3570361.3592519) — `MobiCom 2023`
- [A Case for Stateless Mobile Core Network Functions in Space](https://dl.acm.org/doi/abs/10.1145/3544216.3544233) — `SIGCOMM 2022`
- [Towards Sustainable Multi-Tier Space Networking for LEO Satellite Constellations](https://ieeexplore.ieee.org/document/9812872) — `IWQoS 2022` · 🏆 Best Paper Award Runner-up
- [“Internet in Space” for Terrestrial Users via Cyber-Physical Convergence](https://dl.acm.org/doi/abs/10.1145/3484266.3487375) — `HotNets 2021`
- [“Internet from Space” without Inter-satellite Links](https://dl.acm.org/doi/10.1145/3422604.3425938) — `HotNets 2020`
- [Gearing up for the 21st century space race](https://dl.acm.org/doi/10.1145/3286062.3286079) — `HotNets 2018`
- [Networking in Heaven as on Earth](https://dl.acm.org/doi/10.1145/3286062.3286066) — `HotNets 2018`

### Topology
- [LEOCraft: Towards Designing Performant LEO Networks](https://www.usenix.org/conference/atc25/presentation/basak) — `USENIX ATC 2025`
- [Minimum-hop Constellation Design for Low Earth Orbit Satellite Networks](https://ieeexplore.ieee.org/document/11044684) — `INFOCOM 2025`
- [Small-scale LEO Satellite Networking for Global-scale Demands](https://dl.acm.org/doi/10.1145/3718958.3750525) — `SIGCOMM 2025`
- [Time-Dependent Network Topology Optimization for LEO Satellite Constellations](https://ieeexplore.ieee.org/document/11044725) — `INFOCOM 2025`
- [SatFlow: Scalable Network Planning for LEO Mega-Constellations](https://ieeexplore.ieee.org/document/10858566) — `ICNP 2024`
- [Unraveling Physical Space Limits for LEO Network Scalability](https://dl.acm.org/doi/10.1145/3696348.3696885) — `HotNets 2024`
- [Your Mega-Constellations Can Be Slim: A Cost-Effective Approach for Constructing Survivable and Performant LEO Satellite Networks](https://ieeexplore.ieee.org/document/10621083) — `INFOCOM 2024`
- [EagleEye: Nanosatellite constellation design for high-coverage, high-resolution sensing](https://dl.acm.org/doi/10.1145/3617232.3624851) — `ASPLOS 2024`
- [Enabling Low-latency-capable Satellite-Ground Topology for Emerging LEO Satellite Networks](https://ieeexplore.ieee.org/document/9796886) — `INFOCOM 2022`
- [StarPerf: Characterizing Network Performance for Emerging Mega-Constellations](https://icnp20.cs.ucr.edu/proceedings/main/StarPerf.pdf) — `ICNP 2020`
- [Network topology design at 27,000 km/hour](https://dl.acm.org/doi/10.1145/3359989.3365407) — `CoNEXT 2019`

### Routing
- [CrowdLink: Unlocking Idle LEO Network Capacity with User Terminals](https://nines-conference.org/papers/p028-Liu.pdf) — `NINeS 2026`
- [DS-Route: GNN-based Flow-Level Latency Prediction in Software-Defined LEO Satellite Networks](https://ieeexplore.ieee.org/document/11571392) — `INFOCOM 2026`
- [Optimal Oblivious Load-Balancing for Sparse Traffic in Large-Scale Satellite Networks](https://ieeexplore.ieee.org/document/11571543) — `INFOCOM 2026`
- [PMPS: Predictive Multi-Path Scheduling for Handover-Free LEO Communications](https://doi.org/10.1109/INFOCOM59046.2026.11571684) — `INFOCOM 2026`
- [SaTor: Exploring Satellite Routing in Tor to Reduce Latency](https://ieeexplore.ieee.org/abstract/document/11573531) — `S&P 2026`
- [SkyRipple: Decentralized Routing for Multi-Shell Low-Earth-Orbit Satellite Constellation Networks](https://dl.acm.org/doi/abs/10.1145/3786285) — `CoNEXT 2026`
- [How Resilient are They? Robustness Analysis of LEO Satellite Routing](https://doi.org/10.1109/IWQOS65803.2025.11143286) — `IWQoS 2025`
- [SaTE: Low-Latency Traffic Engineering for Satellite Networks](https://dl.acm.org/doi/10.1145/3718958.3750524) — `SIGCOMM 2025`
- [StableRoute: When Dijkstra's Algorithm Meets Topology-Varying Satellite Networks](https://ieeexplore.ieee.org/document/11044485) — `INFOCOM 2025`
- [Time-varying Bottleneck Links in LEO Satellite Networks: Identification, Exploits, and Countermeasures](https://www.ndss-symposium.org/ndss-paper/time-varying-bottleneck-links-in-leo-satellite-networks-identification-exploits-and-countermeasures/) — `NDSS 2025`
- [NDN's Stateful Forwarding Plane in the Presence of Ground-Satellite Handovers](https://doi.org/10.1109/ICNP61940.2024.10858574) — `ICNP 2024`
- [Stable Hierarchical Routing for Operational LEO Networks](https://dl.acm.org/doi/10.1145/3636534.3649362) — `MobiCom 2024`
- [StarMaze: Ring-based Attack in Satellite Internet Constellations](https://ieeexplore.ieee.org/abstract/document/10682867) — `IWQoS 2024`
- [STARVERI: Efficient and Accurate Verification for Risk-Avoidance Routing in Leo Satellite Networks](https://ieeexplore.ieee.org/document/10858518) — `ICNP 2024`
- [Achieving Resilient and Performance-Guaranteed Routing in Space-Terrestrial Integrated Networks](https://ieeexplore.ieee.org/abstract/document/10229104) — `INFOCOM 2023`
- [FALCON: Towards Fast and Scalable Data Delivery for Emerging Earth Observation Constellations](https://ieeexplore.ieee.org/abstract/document/10228910) — `INFOCOM 2023`
- [Geographic Low-Earth-Orbit Networking without QoS Bottlenecks from Infrastructure Mobility](https://ieeexplore.ieee.org/document/9812903) — `IWQoS 2022`
- [ICARUS: Attacking Low Earth Orbit Satellite Networks](https://www.usenix.org/conference/atc21/presentation/giuliari) — `USENIX ATC 2021`
- [OrbitCast: Exploiting Mega-Constellations for Low-Latency Earth Observation](https://icnp21.cs.ucr.edu/papers/icnp21camera-paper56.pdf) — `ICNP 2021`
- [Using ground relays for low-latency wide-area routing in megaconstellations](https://dl.acm.org/doi/10.1145/3365609.3365859) — `HotNets 2019`
- [Delay is Not an Option: Low Latency Routing in Space](https://dl.acm.org/doi/10.1145/3286062.3286075) — `HotNets 2018`

### Mobility
- [Joint Optimization of Handoff and Video Rate in LEO Satellite Networks](https://ieeexplore.ieee.org/document/11571207) — `INFOCOM 2026`
- [KubeSpace: A Low-Latency and Stable Control Plane for LEO Satellite Container Orchestration](https://ieeexplore.ieee.org/document/11571195) — `INFOCOM 2026`
- [PMPS: Predictive Multi-Path Scheduling for Handover-Free LEO Communications](https://doi.org/10.1109/INFOCOM59046.2026.11571684) — `INFOCOM 2026`
- [Seamless Inter-Constellation Sharing via Handover-Aware Space-Ground Association](https://doi.org/10.1109/INFOCOM59046.2026.11571351) — `INFOCOM 2026`
- [SkyOctopus: Enabling Low-Latency Mobile Satellite Network through Multiple Anchors](https://ieeexplore.ieee.org/document/11044594) — `INFOCOM 2025`
- [Accelerating Handover in Mobile Satellite Network](https://ieeexplore.ieee.org/document/10621115) — `INFOCOM 2024`
- [NDN's Stateful Forwarding Plane in the Presence of Ground-Satellite Handovers](https://doi.org/10.1109/ICNP61940.2024.10858574) — `ICNP 2024`
- [Robust Live Streaming over LEO Satellite Constellations: Measurement, Analysis, and Handover-Aware Adaptation](https://dl.acm.org/doi/abs/10.1145/3664647.3680712) — `MM 2024`
- [SKYCASTLE: Taming LEO Mobility to Facilitate Seamless and Low-latency Satellite Internet Services](https://ieeexplore.ieee.org/document/10621390) — `INFOCOM 2024`
- [Mind the Misleading Effects of LEO Mobility on End-to-End Congestion Control](https://dl.acm.org/doi/10.1145/3696348.3696867) — `HotNets 2024`
- [Geographic Low-Earth-Orbit Networking without QoS Bottlenecks from Infrastructure Mobility](https://ieeexplore.ieee.org/document/9812903) — `IWQoS 2022`

### Resource Management
- [Achieving Efficient Storage and Communication via Collaboration](https://dl.acm.org/doi/10.1145/3789240.3829176) — `SIGCOMM 2026`
- [KubeSpace: A Low-Latency and Stable Control Plane for LEO Satellite Container Orchestration](https://ieeexplore.ieee.org/document/11571195) — `INFOCOM 2026`
- [PMPS: Predictive Multi-Path Scheduling for Handover-Free LEO Communications](https://doi.org/10.1109/INFOCOM59046.2026.11571684) — `INFOCOM 2026`
- [Seamless Inter-Constellation Sharing via Handover-Aware Space-Ground Association](https://doi.org/10.1109/INFOCOM59046.2026.11571351) — `INFOCOM 2026`
- [CrowdLink: Unlocking Idle LEO Network Capacity with User Terminals](https://nines-conference.org/papers/p028-Liu.pdf) — `NINeS 2026`
- [LEO Satellite Network Orchestration with Heterogeneous Graph Neural Networks](https://ieeexplore.ieee.org/document/11571289) — `INFOCOM 2026`
- [ERA-LEO: An Efficient Rate Adaptation with Probabilistic Constellation Shaping for LEO Satellite Networks](https://doi.org/10.1109/ICNP65844.2025.11192403) — `ICNP 2025`
- [Geoduck: Nanosatellite Constellation Scheduling for Low Latency Event Detection](https://doi.org/10.1145/3715014.3722080) — `SenSys 2025`
- [Learning to Accelerate Traffic Allocation over Large-Scale Networks](https://ieeexplore.ieee.org/document/11044775) — `INFOCOM 2025`
- [Oracle: QoS-Aware Online Service Provisioning in Non-Terrestrial Networks with Safe Transfer Learning](https://doi.org/10.1109/INFOCOM55648.2025.11044634) — `INFOCOM 2025`
- [SpaceSched: A Constellation-Wide Scheduling System for Resolving Ground Track Congestion in Remote Sensing](https://dl.acm.org/doi/10.1145/3680207.3765249) — `MobiCom 2025`
- [CosMAC: Constellation-Aware Medium Access and Scheduling for IoT Satellites](https://dl.acm.org/doi/10.1145/3636534.3690657) — `MobiCom 2024`
- [In-Orbit Processing or Not? Sunlight-Aware Task Scheduling for Energy-Efficient Space Edge Computing Networks](https://ieeexplore.ieee.org/document/10621268) — `INFOCOM 2024`
- [Orchestrating Sustainable and Service-Differentiable Satellite Networking: A Federated Cross-Orbit Approach](https://doi.org/10.1109/IWQOS61813.2024.10682914) — `IWQoS 2024`
- [Resource-efficient In-orbit Detection of Earth Objects](https://doi.org/10.1109/INFOCOM52122.2024.10621328) — `INFOCOM 2024`
- [FALCON: Towards Fast and Scalable Data Delivery for Emerging Earth Observation Constellations](https://ieeexplore.ieee.org/abstract/document/10228910) — `INFOCOM 2023`
- [Transmitting, Fast and Slow: Scheduling Satellite Traffic through Space and Time](https://dl.acm.org/doi/abs/10.1145/3570361.3592521) — `MobiCom 2023`
- [Mobility- and Load-Adaptive Controller Placement and Assignment in LEO Satellite Networks](https://ieeexplore.ieee.org/document/9488806) — `INFOCOM 2021`
- [Time-Varying Resource Graph Based Resource Model for Space-Terrestrial Integrated Networks](https://ieeexplore.ieee.org/document/9488855) — `INFOCOM 2021`
- [Dynamically Adaptive Cooperation Transmission among Satellite-Ground Integrated Networks](https://ieeexplore.ieee.org/document/9155485) — `INFOCOM 2020`

### Ground Segment
- [CommSAR: Enabling Bidirectional Communication in SAR Imaging Satellites via Shared Waveform](https://dl.acm.org/doi/10.1145/3789240.3829144) — `SIGCOMM 2026`
- [CrowdLink: Unlocking Idle LEO Network Capacity with User Terminals](https://nines-conference.org/papers/p028-Liu.pdf) — `NINeS 2026`
- [Enabling Efficient Transmission of Satellite-to-Ground Downlinks via Throughput Prediction](https://ieeexplore.ieee.org/document/11571545) — `INFOCOM 2026`
- [Satellites are closer than you think: A near field MIMO approach for satellite ground stations](https://ieeexplore.ieee.org/document/11571506) — `INFOCOM 2026`
- [Commercial Dishes Can Be My Ladder: Sustainable and Collaborative Data Offloading in LEO Satellite Networks](https://ieeexplore.ieee.org/document/11044527) — `INFOCOM 2025`
- [NovaPlan: An Efficient Plan of Renting Ground Stations for Emerging LEO Satellite Networks](https://ieeexplore.ieee.org/document/11044563) — `INFOCOM 2025`
- [Beneath the Heavens: A Thorough Measurement Study of the Starlink Terrestrial Network](https://doi.org/10.1109/IWQOS65803.2025.11143359) — `IWQoS 2025`
- [Wireless Signal Injection Attacks on VSAT Satellite Modems](https://www.usenix.org/conference/usenixsecurity24/presentation/bisping) — `USENIX Security 2024`
- [The Space Above the Sky: Uniting Global-Scale Ground Station as a Service for Efficient Orbital Data Processing](https://doi.org/10.1109/ICNP61940.2024.10858567) — `ICNP 2024`
- [A community-driven approach to democratize access to satellite ground stations](https://dl.acm.org/doi/10.1145/3447993.3448630) — `MobiCom 2021`
- [L2D2: Low Latency Distributed Downlink for Low Earth Orbit Satellites](https://dl.acm.org/doi/10.1145/3452296.3472932) — `SIGCOMM 2021`
- [OrbitCast: Exploiting Mega-Constellations for Low-Latency Earth Observation](https://icnp21.cs.ucr.edu/papers/icnp21camera-paper56.pdf) — `ICNP 2021`
- [A Distributed and Hybrid Ground Station Network for Low Earth Orbit Satellites](https://dl.acm.org/doi/10.1145/3422604.3425926) — `HotNets 2020`

### Direct-to-Cell
- [A Variegated Look at Direct-to-Cell Satellites in the Wild](https://dl.acm.org/doi/10.1145/3788086) — `SIGMETRICS 2026`
- [LPG: Raise Your Location Privacy Game in Direct-to-Cell LEO Satellite Networks](https://www.usenix.org/conference/usenixsecurity26/presentation/shi-quan) — `USENIX Security 2026` · 🏆 Distinguished Paper Award
- [SigHitching: Efficient Non-Broadcast Paging in Direct-to-Cell LEO Satellite Networks](https://ieeexplore.ieee.org/document/11571622) — `INFOCOM 2026`
- [A Holistic Approach to Non-Terrestrial 5G Networking with LEO Satellites: Algorithms, Experiments, and Insights](https://dl.acm.org/doi/abs/10.1145/3769001) — `CoNEXT 2025`
- [Direct-to-Cell Satellite Network without Satellite Navigation](https://dl.acm.org/doi/10.1145/3718958.3750522) — `SIGCOMM 2025`
- [Mind the Location Leakage in LEO Direct-to-Cell Satellite Networks](https://www.computer.org/csdl/proceedings-article/sp/2025/223600b026/26hiU4FcBjy) — `S&P 2025`
- [SkyOctopus: Enabling Low-Latency Mobile Satellite Network through Multiple Anchors](https://ieeexplore.ieee.org/document/11044594) — `INFOCOM 2025`
- [Democratizing Direct-to-Cell Low Earth Orbit Satellite Networks](https://www.usenix.org/conference/nsdi24/presentation/liu-lixin) — `NSDI 2024` · 🏆 Outstanding Paper Award
- [The Dark Side of Scale: Insecurity of Direct-to-Cell Satellite Mega-Constellations](https://www.computer.org/csdl/proceedings-article/sp/2024/313000a149/1Ub246TR9EA) — `S&P 2024`
- [A Case for Stateless Mobile Core Network Functions in Space](https://dl.acm.org/doi/abs/10.1145/3544216.3544233) — `SIGCOMM 2022`

### Physical Layer
- [CommSAR: Enabling Bidirectional Communication in SAR Imaging Satellites via Shared Waveform](https://dl.acm.org/doi/10.1145/3789240.3829144) — `SIGCOMM 2026`
- [Pinpointing Transmitting LEO Satellites from a Single Passive Array](https://dl.acm.org/doi/10.1145/3745756.3809228) — `MobiSys 2026`
- [Satellites are closer than you think: A near field MIMO approach for satellite ground stations](https://ieeexplore.ieee.org/document/11571506) — `INFOCOM 2026`
- [QCode: Achieving High Capacity in Uncoordinated Access Channels (UCACH) of Broadband Low Earth Orbit (LEO) Satellite Networks](https://ieeexplore.ieee.org/document/11044546/) — `INFOCOM 2025`
- [B2LoRa: Boosting LoRa Transmission for Satellite-IoT Systems with Blind Coherent Combining](https://dl.acm.org/doi/10.1145/3680207.3723463) — `MobiCom 2025`
- [LEO-Range: Physical Layer Design for Secure Ranging with Low Earth Orbiting Satellites](https://www.usenix.org/conference/usenixsecurity25/presentation/coppola) — `USENIX Security 2025`
- [ERA-LEO: An Efficient Rate Adaptation with Probabilistic Constellation Shaping for LEO Satellite Networks](https://doi.org/10.1109/ICNP65844.2025.11192403) — `ICNP 2025`
- [SARLink: Satellite Backscatter Connectivity using Synthetic Aperture Radar](https://dl.acm.org/doi/10.1145/3715014.3722061) — `SenSys 2025`
- [SigChord: Sniffing Wide Non-sparse Multiband Signals for Terrestrial and Non-terrestrial Networks](https://doi.org/10.1145/3711875.3729159) — `MobiSys 2025`
- [CosMAC: Constellation-Aware Medium Access and Scheduling for IoT Satellites](https://dl.acm.org/doi/10.1145/3636534.3690657) — `MobiCom 2024`
- [From Foe to Friend: The Surprising Turn of Mega Constellations in Radio Astronomy](https://dl.acm.org/doi/10.1145/3696348.3696863) — `HotNets 2024`
- [StarAngle: User Orientation Sensing with Beacon Phase Measurements of Multiple Starlink Satellites](https://doi.org/10.1145/3666025.3699367) — `SenSys 2024`
- [Spectrumize: Spectrum-efficient Satellite Networks for the Internet of Things](https://www.usenix.org/conference/nsdi24/presentation/singh-vaibhav) — `NSDI 2024`
- [Wireless Signal Injection Attacks on VSAT Satellite Modems](https://www.usenix.org/conference/usenixsecurity24/presentation/bisping) — `USENIX Security 2024`
- [Watch This Space: Securing Satellite Communication through Resilient Transmitter Fingerprinting](https://dl.acm.org/doi/10.1145/3576915.3623135) — `CCS 2023`
- [Satellite Spoofing from A to Z: On the Requirements of Satellite Downlink Overshadowing Attacks](https://dl.acm.org/doi/abs/10.1145/3558482.3590190) — `WiSec 2023`
- [PMSat: Optimizing Passive Metasurface for Low Earth Orbit Satellite Communication](https://dl.acm.org/doi/10.1145/3570361.3613257) — `MobiCom 2023`
- [Towards Dual-band Reconfigurable Metamaterial Surfaces for Satellite Networking](https://conferences.sigcomm.org/hotnets/2022/papers/hotnets22_cho.pdf) — `HotNets 2022`
- [Hummingbird: Energy Efficient GPS Receiver for Small Satellites](https://dl.acm.org/doi/10.1145/3372224.3380886) — `MobiCom 2020`
- [GNSS spoofing detection via opportunistic IRIDIUM signals](https://dl.acm.org/doi/10.1145/3395351.3399350) — `WiSec 2020`

### Transport
- [Dissecting the StarLink: Characterizing Queuing and Flow Dynamics in the Starlink Network](https://dl.acm.org/doi/10.1145/3789240.3829162) — `SIGCOMM 2026`
- [LeoCC: Making Internet Congestion Control Robust to LEO Satellite Dynamics](https://dl.acm.org/doi/10.1145/3718958.3750491) — `SIGCOMM 2025`
- [SatPipe: Deterministic TCP Adaptation for Highly Dynamic LEO Satellite Networks](https://ieeexplore.ieee.org/document/11044600) — `INFOCOM 2025`
- [Mind the Misleading Effects of LEO Mobility on End-to-End Congestion Control](https://dl.acm.org/doi/10.1145/3696348.3696867) — `HotNets 2024`
- [SatGuard: Concealing Endless and Bursty Packet Losses in LEO Satellite Networks for Delay-Sensitive Web Applications](https://dl.acm.org/doi/10.1145/3589334.3645639) — `WWW 2024`
- [SaTCP: Link-Layer Informed TCP Adaptation for Highly Dynamic LEO Satellite Networks](https://ieeexplore.ieee.org/abstract/document/10228914) — `INFOCOM 2023`
- [SPACERTC: Unleashing the Low-latency Potential of Mega-constellations for Real-Time Communications](https://ieeexplore.ieee.org/document/9796887) — `INFOCOM 2022`
- [AUTO: Adaptive Congestion Control Based on Multi-Objective Reinforcement Learning for the Satellite-Ground Integrated Network](https://www.usenix.org/conference/atc21/presentation/li-xu) — `USENIX ATC 2021`
- [Lightweight Retransmission for Random Access in Satellite Networks](https://ieeexplore.ieee.org/document/8485806) — `INFOCOM 2018`

### Measurement
- [Dissecting the StarLink: Characterizing Queuing and Flow Dynamics in the Starlink Network](https://dl.acm.org/doi/10.1145/3789240.3829162) — `SIGCOMM 2026`
- [Planet-Scale IoT Connectivity via LEO Satellites](https://dl.acm.org/doi/10.1145/3789240.3829147) — `SIGCOMM 2026`
- [A Large-Scale IPv6-Based Measurement of the Starlink Network](https://doi.org/10.1109/INFOCOM59046.2026.11571358) — `INFOCOM 2026`
- [A Variegated Look at Direct-to-Cell Satellites in the Wild](https://dl.acm.org/doi/10.1145/3788086) — `SIGMETRICS 2026`
- [Exploring the 5G Digital Divide in the Non-Contiguous US: LEO Satellites to the Rescue?](https://dl.acm.org/doi/10.1145/3771568) — `SIGMETRICS 2026`
- [Faster Exploration and Exploitation for Communication Environment Awareness in Starlink](https://doi.org/10.1109/INFOCOM59046.2026.11571189) — `INFOCOM 2026`
- [Investigating Web Content Delivery Performance over Starlink](https://dl.acm.org/doi/abs/10.1145/3774904.3792227) — `WWW 2026`
- [Starlink in the Wild: Multi-Perspective Measurements via DNS](https://dl.acm.org/doi/abs/10.1145/3774904.3792366) — `WWW 2026`
- [What Obstructed Skies Teach Us about Satellite Internet](https://nines-conference.org/papers/p007-Kataria.pdf) — `NINeS 2026`
- [A Comprehensive Study of Satellite Network Performance During Severe or Extreme Geomagnetic Storms over 1.5 Years (May 2024 - Oct 2025)](https://dl.acm.org/doi/10.1145/3788084) — `SIGMETRICS 2026`
- [A Global Perspective on the Past, Present, and Future of Video Streaming over Starlink](https://dl.acm.org/doi/10.1145/3726854.3727268) — `SIGMETRICS 2025`
- [Anyone, Anywhere, not Everyone, Everywhere: Starlink Doesn’t End the Digital Divide](https://conferences.sigcomm.org/hotnets/2025/papers/hotnets25-final35.pdf) — `HotNets 2025`
- [Assessing LEO Satellite Networks for National Emergency Failover](https://dl.acm.org/doi/10.1145/3730567.3764482) — `IMC 2025`
- [Beneath the Heavens: A Thorough Measurement Study of the Starlink Terrestrial Network](https://doi.org/10.1109/IWQOS65803.2025.11143359) — `IWQoS 2025`
- [From GEO to LEO: First Look Into Starlink In-Flight Connectivity](https://dl.acm.org/doi/10.1145/3730567.3764491) — `IMC 2025`
- [Satellite IoT in Practice: A First Measurement Study on Network Availability, Performance, and Costs](https://dl.acm.org/doi/10.1145/3730567.3764496) — `IMC 2025`
- [Vivisecting Starlink Throughput: Measurement and Prediction](https://dl.acm.org/doi/abs/10.1145/3768971) — `CoNEXT 2025`
- [Don’t Look Up: There Are Sensitive Internal Links in the Clear on GEO Satellites](https://dl.acm.org/doi/10.1145/3719027.3765198) — `CCS 2025`
- [A Multifaceted Look at Starlink Performance](https://dl.acm.org/doi/abs/10.1145/3589334.3645328) — `WWW 2024`
- [CosmicDance: Measuring Low Earth Orbital Shifts due to Solar Radiations](https://doi.org/10.1145/3646547.3689024) — `IMC 2024`
- [Deciphering the Enigma of Satellite Computing with COTS Devices: Measurement and Analysis](https://dl.acm.org/doi/10.1145/3636534.3649371) — `MobiCom 2024`
- [Democratizing LEO Satellite Network Measurement](https://dl.acm.org/doi/10.1145/3652963.3655052) — `SIGMETRICS 2024`
- [Robust Live Streaming over LEO Satellite Constellations: Measurement, Analysis, and Handover-Aware Adaptation](https://dl.acm.org/doi/abs/10.1145/3664647.3680712) — `MM 2024`
- [Dissecting the Performance of Satellite Network Operators](https://dl.acm.org/doi/10.1145/3629137) — `CoNEXT 2023`
- [Don’t Forget the User: It’s Time to Rethink Network Measurements](https://conferences.sigcomm.org/hotnets/2023/papers/hotnets23_taneja.pdf) — `HotNets 2023`
- [LEO Satellite vs. Cellular Networks: Exploring the Potential for Synergistic Integration](https://dl.acm.org/doi/abs/10.1145/3624354.3630588) — `CoNEXT 2023`
- [Making Sense of Constellations: Methodologies for Understanding Starlink's Scheduling Algorithms](https://dl.acm.org/doi/10.1145/3624354.3630586) — `CoNEXT 2023`
- [Network Characteristics of LEO Satellite Constellations: A Starlink-Based Measurement from End Users](https://ieeexplore.ieee.org/abstract/document/10228912) — `INFOCOM 2023`
- [A Browser-side View of Starlink Connectivity](https://dl.acm.org/doi/10.1145/3517745.3561457) — `IMC 2022`
- [A First Look at Starlink Performance](https://dl.acm.org/doi/10.1145/3517745.3561416) — `IMC 2022`
- [When satellite is all you have: watching the internet from 550 ms](https://dl.acm.org/doi/abs/10.1145/3517745.3561432) — `IMC 2022`
- [StarPerf: Characterizing Network Performance for Emerging Mega-Constellations](https://icnp20.cs.ucr.edu/proceedings/main/StarPerf.pdf) — `ICNP 2020`

### Space Computing
- [Achieving Efficient Storage and Communication via Collaboration](https://dl.acm.org/doi/10.1145/3789240.3829176) — `SIGCOMM 2026`
- [Enabling Near-realtime Remote Sensing via Satellite–Ground Collaboration of Large Vision–Language Models](https://dl.acm.org/doi/10.1145/3774906.3800497) — `SenSys 2026`
- [KubeSpace: A Low-Latency and Stable Control Plane for LEO Satellite Container Orchestration](https://ieeexplore.ieee.org/document/11571195) — `INFOCOM 2026`
- [DeepSpace: Super Resolution Powered Efficient and Reliable Satellite Image Data Acquisition](https://dl.acm.org/doi/10.1145/3718958.3750523) — `SIGCOMM 2025`
- [Distributed On-Orbit Sparse Coding for Efficient Space Situational Awareness Image Transmission](https://ieeexplore.ieee.org/document/11044504/) — `INFOCOM 2025`
- [Emulating Space Computing Networks with RHONE](https://www.usenix.org/conference/atc25/presentation/wang-liying) — `USENIX ATC 2025`
- [REMU: Memory-aware Radiation Emulation via Dual Addressing for In-orbit Deep Learning System](https://ieeexplore.ieee.org/abstract/document/11132935) — `DAC 2025`
- [A Satellite-Ground Synergistic Large Vision-Language Model System for Earth Observation](https://dl.acm.org/doi/abs/10.1145/3746027.3755299) — `MM 2025`
- [Oracle: QoS-Aware Online Service Provisioning in Non-Terrestrial Networks with Safe Transfer Learning](https://doi.org/10.1109/INFOCOM55648.2025.11044634) — `INFOCOM 2025`
- [EagleEye: Nanosatellite constellation design for high-coverage, high-resolution sensing](https://dl.acm.org/doi/10.1145/3617232.3624851) — `ASPLOS 2024`
- [Known Knowns and Unknowns: Near-realtime Earth Observation Via Query Bifurcation in Serval](https://www.usenix.org/conference/nsdi24/presentation/tao) — `NSDI 2024`
- [Deciphering the Enigma of Satellite Computing with COTS Devices: Measurement and Analysis](https://dl.acm.org/doi/10.1145/3636534.3649371) — `MobiCom 2024`
- [In-Orbit Processing or Not? Sunlight-Aware Task Scheduling for Energy-Efficient Space Edge Computing Networks](https://ieeexplore.ieee.org/document/10621268) — `INFOCOM 2024`
- [Resource-efficient In-orbit Detection of Earth Objects](https://doi.org/10.1109/INFOCOM52122.2024.10621328) — `INFOCOM 2024`
- [SECO: Multi-Satellite Edge Computing Enabled Wide-Area and Real-Time Earth Observation Missions](https://ieeexplore.ieee.org/document/10621270) — `INFOCOM 2024`
- [StarStream: Live Video Analytics over Space Networking](https://doi.org/10.1145/3664647.3680785) — `MM 2024`
- [The Space Above the Sky: Uniting Global-Scale Ground Station as a Service for Efficient Orbital Data Processing](https://doi.org/10.1109/ICNP61940.2024.10858567) — `ICNP 2024`
- [In-orbit Computing: An Outlandish thought Experiment?](https://dl.acm.org/doi/pdf/10.1145/3422604.3425937) — `HotNets 2020`

### Sensing
- [Achieving Efficient Storage and Communication via Collaboration](https://dl.acm.org/doi/10.1145/3789240.3829176) — `SIGCOMM 2026`
- [Enabling Near-realtime Remote Sensing via Satellite–Ground Collaboration of Large Vision–Language Models](https://dl.acm.org/doi/10.1145/3774906.3800497) — `SenSys 2026`
- [Exploring LEO Satellite Networks for Continuous Monitoring and Dynamic Tracking](https://dl.acm.org/doi/10.1145/3774906.3802766) — `SenSys 2026`
- [Pinpointing Transmitting LEO Satellites from a Single Passive Array](https://dl.acm.org/doi/10.1145/3745756.3809228) — `MobiSys 2026`
- [A Satellite-Ground Synergistic Large Vision-Language Model System for Earth Observation](https://dl.acm.org/doi/abs/10.1145/3746027.3755299) — `MM 2025`
- [CitySculpt: 3D City Generation from Satellite Imagery with UV Diffusion](https://dl.acm.org/doi/10.1145/3746027.3755143) — `MM 2025`
- [Constructing 4D Radio Map in LEO Satellite Networks with Limited Samples](https://ieeexplore.ieee.org/document/11044496/) — `INFOCOM 2025`
- [DeepSpace: Super Resolution Powered Efficient and Reliable Satellite Image Data Acquisition](https://dl.acm.org/doi/10.1145/3718958.3750523) — `SIGCOMM 2025`
- [Distributed On-Orbit Sparse Coding for Efficient Space Situational Awareness Image Transmission](https://ieeexplore.ieee.org/document/11044504/) — `INFOCOM 2025`
- [Geoduck: Nanosatellite Constellation Scheduling for Low Latency Event Detection](https://doi.org/10.1145/3715014.3722080) — `SenSys 2025`
- [Meta-Knowledge Path Augmentation for Multi-Hop Reasoning on Satellite Commonsense Multi-Modal Knowledge Graphs](https://dl.acm.org/doi/10.1145/3746027.3754957) — `MM 2025`
- [SARLink: Satellite Backscatter Connectivity using Synthetic Aperture Radar](https://dl.acm.org/doi/10.1145/3715014.3722061) — `SenSys 2025`
- [SpaceSched: A Constellation-Wide Scheduling System for Resolving Ground Track Congestion in Remote Sensing](https://dl.acm.org/doi/10.1145/3680207.3765249) — `MobiCom 2025`
- [Infiltrating the Sky: Data Delay and Overflow Attacks in Earth Observation Constellations](https://doi.org/10.1109/ICNP61940.2024.10858559) — `ICNP 2024`
- [EagleEye: Nanosatellite constellation design for high-coverage, high-resolution sensing](https://dl.acm.org/doi/10.1145/3617232.3624851) — `ASPLOS 2024`
- [Known Knowns and Unknowns: Near-realtime Earth Observation Via Query Bifurcation in Serval](https://www.usenix.org/conference/nsdi24/presentation/tao) — `NSDI 2024`
- [Resource-efficient In-orbit Detection of Earth Objects](https://doi.org/10.1109/INFOCOM52122.2024.10621328) — `INFOCOM 2024`
- [SECO: Multi-Satellite Edge Computing Enabled Wide-Area and Real-Time Earth Observation Missions](https://ieeexplore.ieee.org/document/10621270) — `INFOCOM 2024`
- [StarAngle: User Orientation Sensing with Beacon Phase Measurements of Multiple Starlink Satellites](https://doi.org/10.1145/3666025.3699367) — `SenSys 2024`
- [UrbanCross: Enhancing Satellite Image-Text Retrieval with Cross-Domain Adaptation](https://dl.acm.org/doi/10.1145/3664647.3680604) — `MM 2024`
- [FALCON: Towards Fast and Scalable Data Delivery for Emerging Earth Observation Constellations](https://ieeexplore.ieee.org/abstract/document/10228910) — `INFOCOM 2023`
- [Global Localization of Energy-Constrained Miniature RF Emitters using Low Earth Orbit Satellites](https://doi.org/10.1145/3625687.3625794) — `SenSys 2023`
- [UbiPose: Towards Ubiquitous Outdoor AR Pose Tracking using Aerial Meshes](https://dl.acm.org/doi/10.1145/3570361.3613263) — `MobiCom 2023`
- [Beyond Geo-localization: Fine-grained Orientation of Street-view Images by Cross-view Matching with Satellite Imagery](https://dl.acm.org/doi/10.1145/3503161.3548102) — `MM 2022`
- [Beyond the First Law of Geography: Learning Representations of Satellite Imagery by Leveraging Point-of-Interests](https://dl.acm.org/doi/10.1145/3485447.3512149) — `WWW 2022`
- [OrbitCast: Exploiting Mega-Constellations for Low-Latency Earth Observation](https://icnp21.cs.ucr.edu/papers/icnp21camera-paper56.pdf) — `ICNP 2021`
- [On Detecting Deception in Space Situational Awareness](https://dl.acm.org/doi/10.1145/3433210.3453081) — `Asia CCS 2021`
- [Dual Adversarial Network for Unsupervised Ground/Satellite-to-Aerial Scene Adaptation](https://dl.acm.org/doi/10.1145/3394171.3413893) — `MM 2020`

### Satellite IoT
- [Planet-Scale IoT Connectivity via LEO Satellites](https://dl.acm.org/doi/10.1145/3789240.3829147) — `SIGCOMM 2026`
- [B2LoRa: Boosting LoRa Transmission for Satellite-IoT Systems with Blind Coherent Combining](https://dl.acm.org/doi/10.1145/3680207.3723463) — `MobiCom 2025`
- [SARLink: Satellite Backscatter Connectivity using Synthetic Aperture Radar](https://dl.acm.org/doi/10.1145/3715014.3722061) — `SenSys 2025`
- [Satellite IoT in Practice: A First Measurement Study on Network Availability, Performance, and Costs](https://dl.acm.org/doi/10.1145/3730567.3764496) — `IMC 2025`
- [CosMAC: Constellation-Aware Medium Access and Scheduling for IoT Satellites](https://dl.acm.org/doi/10.1145/3636534.3690657) — `MobiCom 2024`
- [SateRIoT: High-performance Ground-Space Networking for Rural IoT](https://dl.acm.org/doi/10.1145/3636534.3690659) — `MobiCom 2024`
- [Spectrumize: Spectrum-efficient Satellite Networks for the Internet of Things](https://www.usenix.org/conference/nsdi24/presentation/singh-vaibhav) — `NSDI 2024`

### Content Delivery
- [Investigating Web Content Delivery Performance over Starlink](https://dl.acm.org/doi/abs/10.1145/3774904.3792227) — `WWW 2026`
- [Joint Optimization of Handoff and Video Rate in LEO Satellite Networks](https://ieeexplore.ieee.org/document/11571207) — `INFOCOM 2026`
- [A Global Perspective on the Past, Present, and Future of Video Streaming over Starlink](https://dl.acm.org/doi/10.1145/3726854.3727268) — `SIGMETRICS 2025`
- [Spache: Accelerating Ubiquitous Web Browsing via Schedule-Driven Space Caching](https://dl.acm.org/doi/10.1145/3696410.3714789) — `WWW 2025`
- [StarCDN: Moving Content Delivery Networks to Space](https://dl.acm.org/doi/10.1145/3718958.3754345) — `SIGCOMM 2025`
- [It's a bird? It's a plane? It's CDN!: Investigating Content Delivery Networks in the LEO Satellite Networks Era](https://dl.acm.org/doi/10.1145/3696348.3696879) — `HotNets 2024`
- [Robust Live Streaming over LEO Satellite Constellations: Measurement, Analysis, and Handover-Aware Adaptation](https://dl.acm.org/doi/abs/10.1145/3664647.3680712) — `MM 2024`
- [StarStream: Live Video Analytics over Space Networking](https://doi.org/10.1145/3664647.3680785) — `MM 2024`
- [Cooperatively Constructing Cost-Effective Content Distribution Networks upon Emerging Low Earth Orbit Satellites and Clouds](https://icnp21.cs.ucr.edu/papers/icnp21camera-paper55.pdf) — `ICNP 2021`

### Security

#### Location and Ranging
- [LPG: Raise Your Location Privacy Game in Direct-to-Cell LEO Satellite Networks](https://www.usenix.org/conference/usenixsecurity26/presentation/shi-quan) — `USENIX Security 2026` · 🏆 Distinguished Paper Award
- [Mind the Location Leakage in LEO Direct-to-Cell Satellite Networks](https://www.computer.org/csdl/proceedings-article/sp/2025/223600b026/26hiU4FcBjy) — `S&P 2025`
- [LEO-Range: Physical Layer Design for Secure Ranging with Low Earth Orbiting Satellites](https://www.usenix.org/conference/usenixsecurity25/presentation/coppola) — `USENIX Security 2025`
- [Orbital Trust and Privacy: SoK on PKI and Location Privacy Challenges in Space Networks](https://www.usenix.org/conference/usenixsecurity24/presentation/koisser) — `USENIX Security 2024`
- [RECORD: A RECeption-Only Region Determination Attack on LEO Satellite Users](https://www.usenix.org/conference/usenixsecurity24/presentation/jedermann) — `USENIX Security 2024`
- [Don't Shoot the Messenger: Localization Prevention of Satellite Internet Users](https://www.computer.org/csdl/proceedings-article/sp/2024/313000a066/1RjEaCUhdxm) — `S&P 2024`

#### Software and Firmware
- [SatBleed: Security of Commoditized Communication Modules in Satellites](https://ieeexplore.ieee.org/document/11573399) — `S&P 2026`
- [Space RadSim: Binary-Agnostic Fault Injection to Evaluate Cosmic Radiation Impact on Exploit Mitigation Techniques in Space](https://www.computer.org/csdl/proceedings-article/sp/2025/223600b009/26hiU43Jy92) — `S&P 2025`
- [SoK: Space Infrastructures Vulnerabilities, Attacks and Defenses](https://doi.org/10.1109/SP61157.2025.00138) — `S&P 2025`
- [A Comprehensive Analysis of Security Vulnerabilities and Attacks in Satellite Modems](https://dl.acm.org/doi/abs/10.1145/3658644.3670390) — `CCS 2024`
- [Space Odyssey: An Experimental Software Security Analysis of Satellites](https://doi.org/10.1109/SP46215.2023.10351029) — `S&P 2023` · 🏆 Distinguished Paper Award

#### Network Attacks
- [Time-varying Bottleneck Links in LEO Satellite Networks: Identification, Exploits, and Countermeasures](https://www.ndss-symposium.org/ndss-paper/time-varying-bottleneck-links-in-leo-satellite-networks-identification-exploits-and-countermeasures/) — `NDSS 2025`
- [StarMaze: Ring-based Attack in Satellite Internet Constellations](https://ieeexplore.ieee.org/abstract/document/10682867) — `IWQoS 2024`
- [Energy Drain Attack in Satellite Internet Constellations](https://ieeexplore.ieee.org/document/10188709) — `IWQoS 2023`
- [ICARUS: Attacking Low Earth Orbit Satellite Networks](https://www.usenix.org/conference/atc21/presentation/giuliari) — `USENIX ATC 2021`

#### Situational Awareness
- [On Detecting Deception in Space Situational Awareness](https://dl.acm.org/doi/10.1145/3433210.3453081) — `Asia CCS 2021`

#### Protocol Security
- [SaTor: Exploring Satellite Routing in Tor to Reduce Latency](https://ieeexplore.ieee.org/abstract/document/11573531) — `S&P 2026`
- [HoneySat: A Network-based Satellite Honeypot Framework](https://www.ndss-symposium.org/ndss-paper/honeysat-a-network-based-satellite-honeypot-framework/) — `NDSS 2026`
- [Stealthy Low Earth Orbit Satellite-to-Ground Quantum Communication](https://nines-conference.org/papers/p011-Song.pdf) — `NINeS 2026`
- [Don’t Look Up: There Are Sensitive Internal Links in the Clear on GEO Satellites](https://dl.acm.org/doi/10.1145/3719027.3765198) — `CCS 2025`
- [Starshields for iOS: Navigating the Security Cosmos in Satellite Communication](https://www.ndss-symposium.org/ndss-paper/starshields-for-ios-navigating-the-security-cosmos-in-satellite-communication/) — `NDSS 2025`
- [The Dark Side of Scale: Insecurity of Direct-to-Cell Satellite Mega-Constellations](https://www.computer.org/csdl/proceedings-article/sp/2024/313000a149/1Ub246TR9EA) — `S&P 2024`
- [Infiltrating the Sky: Data Delay and Overflow Attacks in Earth Observation Constellations](https://doi.org/10.1109/ICNP61940.2024.10858559) — `ICNP 2024`
- [VSAsTer: Uncovering Inherent Security Issues in Current VSAT System Practices](https://dl.acm.org/doi/10.1145/3643833.3656139) — `WiSec 2024`
- [QPEP: An Actionable Approach to Secure and Performant Broadband From Geostationary Orbit](https://www.ndss-symposium.org/ndss-paper/qpep-an-actionable-approach-to-secure-and-performant-broadband-from-geostationary-orbit/) — `NDSS 2021`
- [A Tale of Sea and Sky On the Security of Maritime VSAT Communications](https://ieeexplore.ieee.org/document/9152624/keywords#keywords) — `S&P 2020`
- [Secrets in the Sky: On Privacy and Infrastructure Security in DVB-S Satellite Broadband](https://dl.acm.org/doi/10.1145/3317549.3323418) — `WiSec 2019`
- [Don’t Trust Satellite Phones: A Security Analysis of Two Satphone Standards](https://www.ieee-security.org/TC/SP2012/papers/4681a128.pdf) — `S&P 2012`

#### Authentication and Trust
- [Watch This Space: Securing Satellite Communication through Resilient Transmitter Fingerprinting](https://dl.acm.org/doi/10.1145/3576915.3623135) — `CCS 2023`
- [V'CER: Efficient Certificate Validation in Constrained Networks](https://www.usenix.org/conference/usenixsecurity22/presentation/koisser) — `USENIX Security 2022`
- [Orbit-based Authentication Using TDOA Signatures in Satellite Networks](https://dl.acm.org/doi/abs/10.1145/3448300.3469132) — `WiSec 2021`

#### Spoofing
- [GNSS-WASP: GNSS Wide Area SPoofing](https://www.usenix.org/conference/usenixsecurity25/presentation/tibaldo) — `USENIX Security 2025`
- [Wireless Signal Injection Attacks on VSAT Satellite Modems](https://www.usenix.org/conference/usenixsecurity24/presentation/bisping) — `USENIX Security 2024`
- [Satellite Spoofing from A to Z: On the Requirements of Satellite Downlink Overshadowing Attacks](https://dl.acm.org/doi/abs/10.1145/3558482.3590190) — `WiSec 2023`
- [GNSS spoofing detection via opportunistic IRIDIUM signals](https://dl.acm.org/doi/10.1145/3395351.3399350) — `WiSec 2020`

### Reliability
- [A Comprehensive Study of Satellite Network Performance During Severe or Extreme Geomagnetic Storms over 1.5 Years (May 2024 - Oct 2025)](https://dl.acm.org/doi/10.1145/3788084) — `SIGMETRICS 2026`
- [How Resilient are They? Robustness Analysis of LEO Satellite Routing](https://doi.org/10.1109/IWQOS65803.2025.11143286) — `IWQoS 2025`
- [REMU: Memory-aware Radiation Emulation via Dual Addressing for In-orbit Deep Learning System](https://ieeexplore.ieee.org/abstract/document/11132935) — `DAC 2025`
- [Space RadSim: Binary-Agnostic Fault Injection to Evaluate Cosmic Radiation Impact on Exploit Mitigation Techniques in Space](https://www.computer.org/csdl/proceedings-article/sp/2025/223600b009/26hiU43Jy92) — `S&P 2025`
- [Sustainability or Survivability? Eliminating the Need to Choose in LEO Satellite Constellations](https://conferences.sigcomm.org/hotnets/2025/papers/hotnets25-final233.pdf) — `HotNets 2025`
- [Your Mega-Constellations Can Be Slim: A Cost-Effective Approach for Constructing Survivable and Performant LEO Satellite Networks](https://ieeexplore.ieee.org/document/10621083) — `INFOCOM 2024`
- [Mars Attacks! Software Protection Against Space Radiation](https://conferences.sigcomm.org/hotnets/2023/papers/hotnets23_wang.pdf) — `HotNets 2023`
- [Energy Drain Attack in Satellite Internet Constellations](https://ieeexplore.ieee.org/document/10188709) — `IWQoS 2023`
- [SOS: Isolated Health Monitoring System to Save Our Satellites](https://dl.acm.org/doi/10.1145/3458864.3466862) — `MobiSys 2021`

### Experimental Platforms
- [SERENADE: A Digital Twin Emulator for LEO Satellite Networking At-Scale](https://dl.acm.org/doi/10.1145/3774906.3802777) — `SenSys 2026`
- [Emulating Space Computing Networks with RHONE](https://www.usenix.org/conference/atc25/presentation/wang-liying) — `USENIX ATC 2025`
- [LEOCraft: Towards Designing Performant LEO Networks](https://www.usenix.org/conference/atc25/presentation/basak) — `USENIX ATC 2025`
- [StarryNet: Empowering Researchers to Evaluate Futuristic Integrated Space and Terrestrial Networks](https://www.usenix.org/conference/nsdi23/presentation/lai-zeqi) — `NSDI 2023`
- [A community-driven approach to democratize access to satellite ground stations](https://dl.acm.org/doi/10.1145/3447993.3448630) — `MobiCom 2021`
- [Hypatia: A Simulation Framework for Low Earth Orbit Satellites](https://dl.acm.org/doi/10.1145/3419394.3423635) — `IMC 2020`
- [StarPerf: Characterizing Network Performance for Emerging Mega-Constellations](https://icnp20.cs.ucr.edu/proceedings/main/StarPerf.pdf) — `ICNP 2020`

<p align="right"><a href="#awesome-satellite-network-">Back to top ↑</a></p>

## Workshops
- [4th ACM Workshop on LEO Networking and Communication 2026 (LEO-NET)](https://leo-net-workshop.github.io/2026/index.html) — `SIGCOMM 2026`
- [3rd ACM Workshop on LEO Networking and Communication 2025 (LEO-NET)](https://leo-net-workshop.github.io/2025/program.html) — `SIGCOMM 2025`
- [3rd Workshop on Security of Space and Satellite Systems (SpaceSec)](https://spacesec.info) — `NDSS 2025`
- [2nd ACM Workshop on LEO Networking and Communication 2024 (LEO-NET)](https://leo-net-workshop.github.io/2024/) — `MobiCom 2024`
- [2nd Workshop on Security of Space and Satellite Systems (SpaceSec)](https://www.ndss-symposium.org/ndss-program/spacesec-2024/) — `NDSS 2024`
- [1st Workshop on Security of Space and Satellite Systems (SpaceSec)](https://www.ndss-symposium.org/ndss-program/spacesec-2023/) — `NDSS 2023`
- [1st ACM Workshop on LEO Networking and Communication 2023 (LEO-NET)](https://leo-net-workshop.github.io/2023/) — `MobiCom 2023`
- [1st ACM Workshop on Satellite Networking and Computing (SatCom)](https://soar.group/satcom23/) — `MobiCom 2023`
- [1st Workshop on 6G Enablers: Satellite, Qualitative and Semantic Communications](https://qualitativesemantic.wordpress.com) — `ICNP 2023`

## Tutorials
- [Integrated Satellite-Terrestrial Network (ISTN)](https://conferences.sigcomm.org/sigcomm/2021/ISTN-tutorial.html) — `SIGCOMM 2021`

## Projects

### Open-source 3GPP NTN protocol stacks
- [OpenAirInterface5G](https://gitlab.eurecom.fr/oai/openairinterface5g/-/blob/develop/doc/RUNMODEM.md#how-to-run-a-ntn-configuration) — An open-source 5G stack with GEO/LEO NTN configurations for transparent and regenerative satellite payloads.
- [srsRAN](https://docs.srsran.com/projects/project/en/latest/tutorials/source/ntn/source/index.html) — An open-source 5G RAN stack with an NTN tutorial currently focused on GEO configurations.

### Protocol and networking software
- [libcsp](https://github.com/libcsp/libcsp) — A lightweight implementation of the CubeSat Space Protocol for embedded spacecraft communication.
- [NASA High-rate Delay Tolerant Networking (HDTN)](https://github.com/nasa/HDTN) — A high-rate implementation of Delay/Disruption Tolerant Networking for space communication systems.

### Simulators and emulators
- [Hypatia](https://github.com/snkas/hypatia) — A framework for generating LEO constellations and running packet-level ns-3 simulations with visualization support.
- [Celestial](https://github.com/OpenFogStack/celestial) — A Firecracker-based emulator for LEO edge-computing applications with time-varying links and multi-host support.
- [OpenSN](https://github.com/OpenSN-Library/OpenSN-Library) — An open-source library for constructing and evaluating dynamic satellite-network topologies and routing schemes.
- [SERENADE](https://github.com/serenade-project/SERENADE) — A real-time packet-level emulator that carries real IP traffic while modeling dynamic satellite links, routing, and topology.
- [SNS-3](https://github.com/sns3/sns3-satellite) — An ns-3 satellite-network extension supporting LEO/GEO scenarios, channel models, traffic, and satellite protocols.
- [OpenSAND](https://github.com/CNES/opensand) — A CNES satellite-network emulator for DVB-S2/RCS systems that can connect real applications and equipment.
- [CosmicBeats Simulator](https://github.com/microsoft/CosmicBeats-Simulator) — A modular simulator for modeling satellite constellations, network links, and space-computing scenarios.
- [StarryNet](https://github.com/SpaceNetLab/StarryNet) — A container-based emulator for evaluating integrated space-terrestrial networks with dynamic LEO topologies.
- [StarPerf](https://github.com/SpaceNetLab/StarPerf_Simulator) — A flow-level simulator for characterizing routing and performance in emerging mega-constellations.
- [6GSPACELab](https://6gspacelab.uni.lu/5GforSpace) — A University of Luxembourg testbed for integrated terrestrial and non-terrestrial 5G/6G experimentation.

### Ground stations and measurement testbeds
- [SatNOGS](https://satnogs.org/documentation/) — An open-source global network of satellite ground stations with software for scheduling, receiving, and sharing observations.
- [LEOScope](https://leoscope.surrey.ac.uk/) — A distributed Starlink measurement platform that lets researchers run experiments from geographically diverse terminals.

## Tools

### Measurement and telemetry
- [LEOViz](https://github.com/clarkzjw/LEOViz/) — Records and visualizes serving-satellite estimates, latency, and terminal metrics for Starlink and OneWeb.
- [starlink-grpc-tools](https://github.com/sparky8512/starlink-grpc-tools) — A collection of scripts for querying, recording, and exporting telemetry from Starlink user terminals over gRPC.

### Visualization
- [CesiumJS](https://github.com/CesiumGS/cesium) — An open-source JavaScript library for interactive 3D globes, maps, and large-scale satellite visualizations.
- [Starlink.sx](https://starlink.sx) — An interactive 3D map for exploring Starlink orbits, coverage, gateways, and network geometry.
- [See Starlink](https://james.darpinian.com/satellites/?special=starlink) — Predicts visible Starlink satellite passes for a user-selected location.
- [Satellite Map](https://satellitemap.space) — Displays an interactive map of Starlink and other satellite constellations.

### Orbit and mission analysis
- [Orekit](https://www.orekit.org/) — A Java library for high-precision orbit propagation, frames, time systems, attitude, and visibility analysis.
- [NASA General Mission Analysis Tool (GMAT)](https://software.nasa.gov/software/GSC-19468-1) — An open-source mission-design and trajectory-optimization tool for spacecraft orbit and navigation analysis.
- [Basilisk](https://avslab.github.io/basilisk/) — A modular astrodynamics and spacecraft simulation framework supporting software- and hardware-in-the-loop workflows.
- [python-sgp4](https://pypi.org/project/sgp4/) — A Python implementation of Vallado's SGP4 propagator for TLE and OMM satellite element sets.
- [Skyfield](https://rhodesmill.org/skyfield/) — A Python library for high-precision astronomy and satellite position calculations, including TLE propagation.
- [ESA Space Debris Software](https://sdup.esoc.esa.int) — A portal for ESA space-debris environment, risk-assessment, mitigation, and re-entry analysis tools.

## Datasets

### Orbit data
- [Space-Track](https://www.space-track.org/) — The U.S. Space Force catalog portal for space-object metadata and orbital element sets.
- [CelesTrak](https://celestrak.org/) — A public source of curated GP/TLE/OMM orbital data and satellite-tracking resources.

### Starlink
- [LENS](https://github.com/clarkzjw/LENS) — A continuously updated multi-region Starlink and OneWeb dataset with ping, IRTT, and terminal-telemetry measurements.
- [WetLinks](https://github.com/sys-uos/WetLinks) — A six-month Starlink dataset combining throughput, RTT, loss, traceroutes, and colocated weather observations.
- [Starlink End-User Measurement Data](https://github.com/Starlink-Measurement/starlink-infocom2023) — Code and data for the INFOCOM 2023 end-user study of Starlink network characteristics.
- [A Multifaceted Look at Starlink Performance Dataset](https://doi.org/10.14459/2024mp1734703) — Measurement data from the WWW 2024 study combining crowdsourced, RIPE Atlas, and controlled experiments on latency, throughput, routing, and application performance.
- [Starlink Measurements 01/2022–06/2022](https://doi.org/10.5281/zenodo.15303862) — A six-month dataset containing ping, traceroute, HTTP, TLS, visible-satellite, and terminal-disconnection measurements.
- [Starlink on the Autobahn](https://doi.org/10.21227/knvp-8d25) — Mobile Starlink throughput, RTT, and loss measurements from a 300-km drive in Germany, with stationary terminal and service-plan comparisons.
- [Filtered Crowdsourced Starlink Measurements](https://doi.org/10.4121/0bf59468-e5cb-433f-aeb2-e04cf694b65c.v1) — Approximately 23 million M-Lab and Cloudflare latency and throughput measurements enriched with satellite-visibility, geographic, and weather features.
- [Starlink One-Way Delay Dataset](https://doi.org/10.5281/zenodo.16275283) — Hardware-timestamped uplink and downlink one-way-delay measurements collected from a Starlink terminal in Sweden for LEO-NET 2025.
- [Global Starlink Web Cache Latency and Traceroute Dataset](https://doi.org/10.5281/zenodo.14800115) — Roughly two million RIPE Atlas ping and traceroute measurements from Starlink probes across five continents to popular websites.
- [Understanding DNS Dynamics over Starlink Dataset](https://doi.org/10.5281/zenodo.20642922) — Custom and RIPE Atlas DNS measurements with Parquet data, constellation-development records, and reproducible analysis notebooks.
- [CARL-W Starlink Dataset](https://doi.org/10.5281/zenodo.8130936) — A one-month measurement dataset from a testbed integrating Starlink with a private 5G network.
- [Starlink Latency and Downlink Throughput Dataset](https://doi.org/10.5281/zenodo.10020034) — Public Starlink round-trip-latency and downlink-throughput measurements.
- [Statistical Characterization of LEO E2E Latency Dataset](https://doi.org/10.17632/479v4mym7j.2) — Per-packet Starlink IRTT traces containing timestamps, uplink delay, downlink delay, and RTT from multiple long-running experiments.
- [Website Fingerprinting over Starlink Dataset](https://doi.org/10.5281/zenodo.10478853) — Preprocessed Tor and Firefox website-access traces collected over Starlink and fiber links for evaluating website-fingerprinting attacks.
- [Starlink IPv6 and Backbone Topology Data](https://ki3.org.cn/#/starlink-network) — Data from a large-scale IPv6 study, including active user routers, points of presence, and inferred backbone connections.
- [NEXASPHERE 7-Day Starlink Dataset](https://zenodo.org/records/20796667) — A seven-day Athens deployment with latency, jitter, throughput, terminal telemetry, and availability measurements.
- [StarLoc Passive RF Dataset](https://zenodo.org/records/19043854) — Passive Starlink Ku-band IQ captures from a synchronized three-receiver array, with IMU/GNSS and TLE metadata for 81 satellites across 11 observations.
- [Starlink Ku-band Frames and Pilots Dataset](https://doi.org/10.5281/zenodo.21404930) — Decoded Starlink Ku-band downlink frames and MATLAB scripts for studying pilot sequences, recurrent symbols, and modulation mappings.
- [Raw Starlink and OneWeb Monitoring Data](https://doi.org/10.5281/zenodo.8400657) — One month of spectrum scans, Ku-band beacon monitoring, SDR captures, and corresponding daily TLE data collected in the UK.

### Network measurement and telemetry data
- [RHONE On-Orbit Telemetry Data](https://github.com/TiansuanConstellation/ATC25-RHONE-DATA) — Power, temperature, and runtime telemetry collected from the Tiansuan constellation for RHONE.

### Signal data
- [IRIDIUM Broadcast Message Physical-Layer Dataset](https://data.mendeley.com/datasets/xcxspv8c2r/2) — 3.84 million IRIDIUM broadcast-message records and 7.63 billion associated IQ samples collected during two month-long measurement campaigns.
- [RML24](https://zenodo.org/records/17800058) — A hardware-in-the-loop satellite TT&C signal dataset with 1,386,000 samples across 22 modulation formats and annotated SNR and symbol-rate metadata.

### Open measurement and observation sources
- [SatNOGS Observations Database](https://network.satnogs.org/observations/) — An openly queryable global archive of ground-station observations, waterfalls, decoded telemetry, pass geometry, and satellite metadata.
- [RIPE Atlas](https://atlas.ripe.net/) — A global active-measurement platform whose public API supports extracting satellite-network ping, traceroute, DNS, and other measurements by probe and ASN.
- [Measurement Lab (M-Lab)](https://www.measurementlab.net/data/) — An open Internet-measurement archive that supports longitudinal extraction of Starlink throughput and latency records, including NDT data.
- [Cloudflare Radar](https://radar.cloudflare.com/) — Public network-quality and speed-test insights that can be explored by ASN and geography for aggregate Starlink performance analysis.

## Citation

If this collection supports your research, please cite it using the following entry ([download BibTeX](CITATION.bib)):

```bibtex
@misc{liu2026awesomeSatelliteNetworking,
  author = {Wei Liu},
  title  = {Awesome Satellite Networking},
  year   = {2026},
  url    = {https://github.com/liuwei-network/awesome-satellite-network},
  note   = {A curated collection of papers, systems, datasets, and tools for satellite networking and non-terrestrial networks}
}
```

<p align="right"><a href="#awesome-satellite-network-">Back to top ↑</a></p>
