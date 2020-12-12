import { Injectable } from '@angular/core';
import { DetailedBlogModule } from './detailed-blog.module';

Injectable({
  providedIn: 'root'
});
export class DetailedBlogService {

  detailedBlogs: DetailedBlogModule[] = [
    {
      id: 'b49b4331-3b2d-485e-b8ae-f19c93e448f6',
      header: 'AI Search',
      caption: 'Search solutions intelligently!',
      summary: '<ul>' +
              '<li>Introduces AI search</li>' +
              '<li>Why computer scientists call it the "AI" search?</li>' +
              '<li>Gives a brief description of various AI search algorithms.</li>' +
              '<li>There is also a simulator that runs your chosen search algorithm, showing the decisions that '
              + 'the algorithm makes!</li></ul>',
      embeddedProjectName: 'AI Search Simulator',
      content: '<br><p>We search for solutions everyday when we make decisions. We try to make sure that our decisions incure least cost and give maximum returns. Unknowingly we iterate over a lot of possiblities evaluating each one to check if it is the best fit. We select the best fit. In some cases, the number of possibilities can be huge, what do we do in such cases? We look for the "seemingly" best case or we use some estimates! A lot of search algorithms work the same way.</p>' +
      '<p>For instance, one search problem that we might face in our everyday lifes is "to find the best way to reach a location". There are various means of transport today, you can take an Uber, a subway, a bus, an airplane. So, one means of transport can take you directly to the destination but will cost a lot, some other means of transport may not cost that much but might involve changing vehicles. You might try using a combination of various means of transport. Again if you have many possibilities, you may not be able to find the best solution. Some years before we used to do this problem in our head, but now google does it for us.</p>' +
      '<div style="width: 100%; overflow: hidden;"><p>Consider a specific example of going from the Governers Hall located at the University at Buffalo\'s North Campus to Buffalo Downtown. Google Maps throws a bunch of options to you as shown in the image. The first option suggests that you walk for 9 minutes, get a bus, and then a subway. The second option suggests to take a bus in both cases. There is also a suggestion to use Uber, and Lyft.</p></div>' +
      '<div style="width:100%; text-align:center;"><img src="https://i.ibb.co/82YQrg4/main.png" width="300px" height="450px" alt="main" border="0"></div>' +
      '<p>Google Maps has walked over many possibilities to show you the best option. Essentially it runs a combinatorial optimization problem.</p>' +
      '<p><b>Where does AI search come into the picture then?</b></p>' +
      '<p>The exploration of various possibilities is done by an AI search algorithm. The selection of a search algorithm may differ for each problem and is better if it uses as much problem specific knowledge as possible.</p>' +
      '<p>I\'ve created some explanation videos. Watch them <a href="https://www.youtube.com/watch?v=YIxNOGCdqM4&list=PLog16ArGOo_fq34-i-Z3JPZEsq7GRQoSj" target="_blank">here</a>. It is a work in progress.</p>' +
      '<p>I\'ve also built a GUI that has implementation of various search algorithms. Enable it by toggling the switch at the top. Here\'s its <a href="https://github.com/jeetendragan/AISearchSimulator" target="_blank">GitHub</a></p>',
      containsEmbeddedProject: true,
      embeddedProjectURL: 'http://localhost:4201'
    },
    {
      id: '404fc0fe-c60b-4272-a754-a01f163ddf10',
      header: 'Taylor Series',
      caption: 'Get the intuition behind the Taylor series!',
      summary: '<ul>' +
        '<li>What is a Taylor Series?</li>' +
        '<li>How is a Taylor series used?</li>' +
        '<li>How is the Taylor series formula derived?</li></ul>',
      embeddedProjectName: '',
      content: '<br><p><b>So, what is the taylor series?</b></p><p>It is a formula that helps us come up with a polynomial approximation for a function.</p><p>What is function approximation and why is it required?</p><p>So physists, scientists, and engineers often come accross some functions that are hard to compute exactly. What do they do? They approximate just enough to create a similar behaviour. Taylor series can also be used to compute integrals. Also, polynomial functions are easy to handle. It is easy to take their derivatives and integrals.</p><p><b>What is \'function approximation\'?</b></p><p>Function approximation is to find another function(a polynomial) that fits the graph of f(x). It may not fit for every value x, but it mimics f(x) very closely.</p><p>Assuming that you have understood what function approximation is, let\'s forget taylor series for a second, and try to manually come up with a \'trick\' to approximate a given function.'+
          '<p>Let\'s approximate a simple function $$f(x) = sin(x)$$</p><p>Here\'s the sin(x) function graph</p><img src="https://i.ibb.co/J5Cb6CB/fun-sinx.png" width="400" height="325" alt="main" border="0"><p>Will a linear function fit the sin graph? Of course not. But let\'s start with $$P(x) = c_0+x$$</p><p>Where c_0 is a constant(to be found) and x is a variable.</p><p>We want P(x) to represent f(x). Which means that the following should be true.</p><p>$$c_0+x = sin(x)$$$$c_0 = 0 .. when(x = 0)$$</p>'+
          '<p>Clearly this won\'t be enough to approximate the sin function. We need to extend the polynomial.</p><p>$$P(x)=c_0+c_1*x$$ Let us take the derivative of the P(x)$$\\frac{d}{{dx}}\\left (P(x)\\right) = \\frac{d}{{dx}}\\left (c_0 + c_1 * x\\right) = c_1$$The derivative of P(x) should be equal to the derivative of f(x)$$\\frac{d}{{dx}}\\left (P(x)\\right) = \\frac{d}{{dx}}\\left (sin(x)\\right) = cos(x)$$$$c_1 = cos(x)$$Put theta = 0$$c_1 = cos(0) = 1$$We have found our second constant, c_1. Our polynomial is 0 + (1)*x = x.Let\'s plot that on the graph.</p>'+
          '<p><img src="https://i.ibb.co/9t9rtyc/1st-fit.png" width="400" height="325" alt="main" border="0"></p><p>That isn\'t a good fit at all. We need to add more heigher order terms to the polynomial.</p>$$P(x) = c_0 + c_1*x + c_2*x^2$$<p>The double derivative of f(x) will be equal to P(x)$$d\'\'(f(x)) = P\'\'(x)$$$$d\'\'(sin(x)) = P\'\'(c_0 + c_1*x + c_2*x^2)$$$$-sin(x) = 2*c_2$$</p>'+
          '<p>Put x = 0, to get the value of c_2</p><p>$$0 = 2*c_2$$$$c_2 = 0$$Okay, as c_2 is 0, we have added nothing. Let\'s add terms futher.</p><p>$$P(x) = c_0 + c_1*x + c_2*x^2 + c_3*x^3$$</p>'+
          '<p>We take the derivative of P(x) three times so that other terms get cancelled out and we are left with c_3 which has been newly added.</p>$$d\'\'\'(f(x)) = P\'\'\'(x)$$$$-cos(x) = 3*2*c_3 = 6*c_3$$$$c_3 = -1/6$$Our polynomial looks somewhat like this now- $$P(x) = x + (-1/6)*x^3$$Let us try to graph it to see how well it approximates sin(x)<p><img src="https://i.ibb.co/8sHGzpy/image.png" width="400" height="325" alt="main" border="0"></p>The approximation is pretty decent. But we should try doing better.<p>Let us take the 4th derivative of P(x) and F(X).</p>$$d\'\'\'\'(f(x)) = P\'\'\'\'(c_0 + c_1*x + c_2*x^2 + c_3 * x^3 + c_4 * x^4)$$$$d^4(f(x)) = P^4(f(x))$$$$d^4(f(x)) = 4*3*2*1*c_4$$ $$d^4(f(x)) = 4!*c_4$$$$c_4 = d^4(f(x))/4!$$More generally, I can write the nth coefficient, cn as follows:$$c_n = (d^n * f(x))/4!$$$$c_4 = sin(x)/n!$$$$c_4 = 0$$As c_4 is 0, we need to add another heigher polynomial with a degree 5. We can just use the general formula stated above.$$c_5 = (d^5 * f(x))/5!$$$$c_5 = cos(x)/5!$$$$c_5 = 1/120$$Now, our polynomial is as follows:$$P(x) = x + (-1/6)*x^3 + (1/120) * x^5$$Here is its graph.'+
          '<p><img src="https://i.ibb.co/h1n78VX/image.png" width="400" height="325" alt="main" border="0"></p>'+
          'The function is really accurate for values close to 0. Let\'s get more greedy and approximate sin(x) with a heigher degree term. But, this time I am going to skip intermediate steps. Can\'t we just generalize even further and come up with a formula to calculate constants for heigher degree terms? Yes, we can! And here it is.$$ P(x) = f(0) + f\'(0)*x + f\'\'(0)*x^2/2! + f^3(0)*x^3/3! + f^4(0)*x^4/4! + f^5(0)*x^5/5! + f^6(0)*x^6/6! + f^7(0)*x^7 + .....$$This is the <b>Maclaurin Series</b> or the <b>Taylor Series evalualed at 0</b>.<p>Let us take terms till the 9th power of x to getter a better fit. And this is how it looks.</p>$$P(x) = x + (-1/6) * x^3 + (1/120) * x^5 + (-1/7!) * x^7 + (1/9!) * x^9$$Here is a plot for each stage. '+
          '<p><img src="https://i.ibb.co/D5M5VgP/image.png" width="500" height="425" alt="main" border="0"></p>The polynomial with degree 9 (green) blends so well with the sin(x) graph that it is not even visible.<p><img src="https://i.ibb.co/MhmZQtd/image.png" width="500" height="425" alt="main" border="0"></p>To see the difference, I have plotted the values over a broader range. The function with degree 9 starts to diverge at about +5 and -5. To get more accurate, what do we do? We consider heigher order terms in the polynomial. If we manage to get infinite terms, the polygomial can approximate for all values of sin(x). But that may not be required since we might be interested in a smaller range of values. Maclaurin series is a Taylor series evaluated at 0. So, Taylor series can be written like so.$$f(a) + f\'(a)*(x-a) + f\'\'(a)*(x-a)^2/2! + f^3(a)*(x-a)^3/3! + f^4(a)*(x-a)^4/4! + f^5(a)*(x-a)^5/5! + .....$$Which gives us the dreaded formula:$$\\sum_{n=0}^\\infty (f^n(a)*(x-a)^n) / n!$$'+
          'Checkout the MATLAB scripts <a href="https://github.com/jeetendragan/taylor-series-matlab" target="_blank">here</a>',
      containsEmbeddedProject: false,
      embeddedProjectURL: 'false'
    },
    {
      id: 'e5881692-1f14-11eb-adc1-0242ac120002',
      header: 'Paper review - Ocean-Vista',
      caption: 'Gossip-Based Visibility Control for Speedy Geo-Distributed Transactions',
      summary: '<ul>' +
      '<li>Paper by researchers at Alibaba and University of Waterloo</li>' +
      '<li>How does ocean-vista solve the problem of geo-distributed transactions?</li>' +
      '<li>How does it compare to one other state-of-the-art transaction processing system(TAPIER)?</li>' +
      '</ul>',
      embeddedProjectName: '',
      content:'<br><p>I presented this paper in one of my classes (CSE 708-Distributed Systems Seminar). I am really liking this course since I am able to understand how the basics of Distributed Systems(Paxos, Consensus, Replication, Consistency, Linearizability, etc.) are applied to build real-world distributed systems by reading research papers.'+
      '<p>If you don\'t want to read a lot, <a href="https://youtu.be/q0ikitzgkSI" target="_blank">here is a video of the presentation</a>. Also, find the orignal paper written by Hua Fan (Alibaba), and Wojciech Golab (University of Waterloo) <a href="http://www.vldb.org/pvldb/vol12/p1471-fan.pdf" target="_blank">here</a>. The paper was published in VLDB.</p>'+
      '<h2>Introduction</h2>' +
      '<p>Transactions are hard, distributed transactions are even harder, and transactions over a WAN are the hardest of them all. Ocean Vista is a gossip based protocol that guarantees strict serializability for geo-distributed transactions. Ocean-Vista achieves two goals of distributed transaction processing- concurrency and replication with an efficient gossip based distributed protocol. It performs better than a state-of-the-art geo-distributed transaction protocol, TAPIER in some aspects(throughput). TAPIER beats OV in terms of latency, but OV’s best case matches with TAPIER’s latency.</p>'+
      '<h2>How does Ocean-Vista work?</h2>'+
      'OV combines concurrency control, transaction commitment, and replication inside a single protocol. It maintains the visibility of transactions (permission to execute) using watermarks which are gossiped across the data-centers. Each transaction is assigned a version number (globally unique, depending on the timestamp, server id, and an increasing counter). These version numbers are monotonically increasing. It is also assumed that the servers are synchronized by NTP(Network Time Protocol). Furthermore the paper introduces two types of watermarks VWatermark(Visibility watermark), and RWatermark(Replica Watermark). Anything below the RWatermark is considered to be fully-replicated to all replicas. The RWatermark helps OV achieve RO(Read Once), i.e. we need to read from any one replica if the version being read is less than RWatermark. Anything below the VWatermark tells us that a transaction can be made visible(i.e. All the transactions below VWatermark have been written to the replicas). This helps increase efficiency by batch acknowledgement since all versions below VWatermark become visible for all keys.'+
      '<br><p> <h3><b>Asynchronous Concurrency Control protocol</b></h3></p>'+
      '<p>The concurrency control and transaction commitment are taken care of by the Asynchronous Concurrency Control protocol. In that, the transaction placeholders are distributed at all replicas(involved in the transaction) in the write-only phase(S-Phase), and then once the transaction id (Vs) is below the VWatermark, they can be executed locally by the shards independently. Before execution all the versions are ordered, then everything in the transaction’s read set is read(read-only phase). After reading, the output is computed and asynchronously written to all the replicas(write-async).</p>'+
      '<p>What makes OV faster than other concurrency control protocols is that most of the phases described above can be executed in parallel and without conflicts. Only the read-only, and async-write cannot be executed in parallel, but such transactions have a small-contention footprint.</p>'+
      '<p>If all the replicas required are available in the same data center, then OV can achieve best case latency of 1 WAN RTT calculated as follows - </p>'+
      '<ol>'+
      '<li>S-Phase (1 WAN RTT)</li>'+
      '<li>Local reads within DC(Negligible)</li>' +
      '<li>Async Writes (not counted)</li>' +
      '</ol>'+
      '<p><h3><b>Gossips</b></h3></p>'+
      'The global watermarks are maintained using message exchanges between - ' +
      '<ol>' +
      '<li><b>the gossipers and the servers within the datacenter </b> to compute the watermark across servers within a data center</li>'+
      '<li><b>Gossiper-gossiper messages across different data centers</b> to combine knowledge about the watermarks across all the data center</li>'+
      '</ol>' + 
      '<p>The TidManager maintains the server level watermark. The gossipers keep pooling these servers for their server level watermarks. The data center level watermarks are computed by taking the minimum of all the server level watermarks. The gossiper also publishes the global watermark to each server.</p>'+
      '<p>Gossipers exchange their own data center level watermarks with other gossipers to get a global knowledge.</p>' +
      '<p><h3><b>Replication protocol</b></h3></p>'+
      '<p>Writes(S-Phase) succeeds in 1 WAN RTT as long as a super-quorum of replicas is available or in two RTTs once a majority quorum is available whichever comes first. This gives us a WriteQuorum complexity. For read operations, if the version is below the RWatermark, it can be read from the closest replica. Which gives us a ReadOne complexity. If the version to be read is between Rwatermark, and VWatermark, the reader needs to read from a quorum of replicas. This gives us WQRO (Write-Quorum Read-Once) complexity.</p>'+
      '<p><h2>Fault tolerance</h2></p>' +
      '<p>OV handles Coordinator Failure by using a backup to which it writes everything(functor, or computed value) before writing it to a replica. This allows the backup to re-execute the functors to attain the same state as the coordinator. If the backup fails, the progress stalls.</p>'+
      '<p>In case of replica node failures a new leader within a shard is elected that splits the version assignment between 2 sets. First- all the live members of the shard(which handle all the keys up until the max version value from all the live members), Second- All the live members + the new member(which handle all the versions above the max version value of the live members of shard). The merger happens when the new node has all the old versions.</p>'+
      '<p>Since there are multiple Gossipers which perform the same function, other gossipers can take over. If all the gossipers fail, then the DC fails, which requires a membership change to remove the failed data center.</p>'+
      '<p><h2>Performance</h2></p>'+
      'OV-DB has primarily been compared to TAPIR with low contention to high contention workloads. In general OV has a greater throughput than TAPIR, but TAPIR has a lower latency. For 0 contention workloads, OV performs almost 14 times better than TAPIER, and for contention heavy workloads, OV is better by 64 times. In general TAPIER is highly sensitive to contention while OV-DB is not. The greater latency due to gossips is the only metric in which OV falls behind TAPIER.'
      ,
      containsEmbeddedProject: false,
      embeddedProjectURL: 'false'
    }
  ];

  constructor() { }

  public getBlogCards(): DetailedBlogModule[] {
    return this.detailedBlogs;
  }

  public getBlogCard(blogId: string): DetailedBlogModule {

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.detailedBlogs.length; i++) {
      if (this.detailedBlogs[i].id === blogId) {
        return this.detailedBlogs[i];
      }
    }

    return null;
  }
}
