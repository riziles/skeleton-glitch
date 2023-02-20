import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../chunks/index2.js";
const tabulator_simple_min = "";
const Tabulator_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data, dataformat } = $$props;
  let tableComponent;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.dataformat === void 0 && $$bindings.dataformat && dataformat !== void 0)
    $$bindings.dataformat(dataformat);
  return `<div class="${"h-96 max-w-full"}"><div${add_attribute("this", tableComponent, 0)}></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tdata = `idx,mpg,cyl,displ,hp,weight,accel,yr,origin,name
0,18.0,8,307.0,130,3504,12.0,70,1,chevrolet chevelle malibu
1,15.0,8,350.0,165,3693,11.5,70,1,buick skylark 320
2,18.0,8,318.0,150,3436,11.0,70,1,plymouth satellite
3,16.0,8,304.0,150,3433,12.0,70,1,amc rebel sst
4,17.0,8,302.0,140,3449,10.5,70,1,ford torino
5,15.0,8,429.0,198,4341,10.0,70,1,ford galaxie 500
6,14.0,8,454.0,220,4354,9.0,70,1,chevrolet impala
7,14.0,8,440.0,215,4312,8.5,70,1,plymouth fury iii
8,14.0,8,455.0,225,4425,10.0,70,1,pontiac catalina
9,15.0,8,390.0,190,3850,8.5,70,1,amc ambassador dpl
10,15.0,8,383.0,170,3563,10.0,70,1,dodge challenger se
11,14.0,8,340.0,160,3609,8.0,70,1,plymouth 'cuda 340
12,15.0,8,400.0,150,3761,9.5,70,1,chevrolet monte carlo
13,14.0,8,455.0,225,3086,10.0,70,1,buick estate wagon (sw)
14,24.0,4,113.0,95,2372,15.0,70,3,toyota corona mark ii
15,22.0,6,198.0,95,2833,15.5,70,1,plymouth duster
16,18.0,6,199.0,97,2774,15.5,70,1,amc hornet
17,21.0,6,200.0,85,2587,16.0,70,1,ford maverick
18,27.0,4,97.0,88,2130,14.5,70,3,datsun pl510
19,26.0,4,97.0,46,1835,20.5,70,2,volkswagen 1131 deluxe sedan
20,25.0,4,110.0,87,2672,17.5,70,2,peugeot 504
21,24.0,4,107.0,90,2430,14.5,70,2,audi 100 ls
22,25.0,4,104.0,95,2375,17.5,70,2,saab 99e
23,26.0,4,121.0,113,2234,12.5,70,2,bmw 2002
24,21.0,6,199.0,90,2648,15.0,70,1,amc gremlin
25,10.0,8,360.0,215,4615,14.0,70,1,ford f250
26,10.0,8,307.0,200,4376,15.0,70,1,chevy c20
27,11.0,8,318.0,210,4382,13.5,70,1,dodge d200
28,9.0,8,304.0,193,4732,18.5,70,1,hi 1200d
29,27.0,4,97.0,88,2130,14.5,71,3,datsun pl510
30,28.0,4,140.0,90,2264,15.5,71,1,chevrolet vega 2300
31,25.0,4,113.0,95,2228,14.0,71,3,toyota corona
32,19.0,6,232.0,100,2634,13.0,71,1,amc gremlin
33,16.0,6,225.0,105,3439,15.5,71,1,plymouth satellite custom
34,17.0,6,250.0,100,3329,15.5,71,1,chevrolet chevelle malibu
35,19.0,6,250.0,88,3302,15.5,71,1,ford torino 500
36,18.0,6,232.0,100,3288,15.5,71,1,amc matador
37,14.0,8,350.0,165,4209,12.0,71,1,chevrolet impala
38,14.0,8,400.0,175,4464,11.5,71,1,pontiac catalina brougham
39,14.0,8,351.0,153,4154,13.5,71,1,ford galaxie 500
40,14.0,8,318.0,150,4096,13.0,71,1,plymouth fury iii
41,12.0,8,383.0,180,4955,11.5,71,1,dodge monaco (sw)
42,13.0,8,400.0,170,4746,12.0,71,1,ford country squire (sw)
43,13.0,8,400.0,175,5140,12.0,71,1,pontiac safari (sw)
44,18.0,6,258.0,110,2962,13.5,71,1,amc hornet sportabout (sw)
45,22.0,4,140.0,72,2408,19.0,71,1,chevrolet vega (sw)
46,19.0,6,250.0,100,3282,15.0,71,1,pontiac firebird
47,18.0,6,250.0,88,3139,14.5,71,1,ford mustang
48,23.0,4,122.0,86,2220,14.0,71,1,mercury capri 2000
49,28.0,4,116.0,90,2123,14.0,71,2,opel 1900
50,30.0,4,79.0,70,2074,19.5,71,2,peugeot 304
51,30.0,4,88.0,76,2065,14.5,71,2,fiat 124b
52,31.0,4,71.0,65,1773,19.0,71,3,toyota corolla 1200
53,35.0,4,72.0,69,1613,18.0,71,3,datsun 1200
54,27.0,4,97.0,60,1834,19.0,71,2,volkswagen model 111
55,26.0,4,91.0,70,1955,20.5,71,1,plymouth cricket
56,24.0,4,113.0,95,2278,15.5,72,3,toyota corona hardtop
57,25.0,4,97.5,80,2126,17.0,72,1,dodge colt hardtop
58,23.0,4,97.0,54,2254,23.5,72,2,volkswagen type 3
59,20.0,4,140.0,90,2408,19.5,72,1,chevrolet vega
60,21.0,4,122.0,86,2226,16.5,72,1,ford pinto runabout
61,13.0,8,350.0,165,4274,12.0,72,1,chevrolet impala
62,14.0,8,400.0,175,4385,12.0,72,1,pontiac catalina
63,15.0,8,318.0,150,4135,13.5,72,1,plymouth fury iii
64,14.0,8,351.0,153,4129,13.0,72,1,ford galaxie 500
65,17.0,8,304.0,150,3672,11.5,72,1,amc ambassador sst
66,11.0,8,429.0,208,4633,11.0,72,1,mercury marquis
67,13.0,8,350.0,155,4502,13.5,72,1,buick lesabre custom
68,12.0,8,350.0,160,4456,13.5,72,1,oldsmobile delta 88 royale
69,13.0,8,400.0,190,4422,12.5,72,1,chrysler newport royal
70,19.0,3,70.0,97,2330,13.5,72,3,mazda rx2 coupe
71,15.0,8,304.0,150,3892,12.5,72,1,amc matador (sw)
72,13.0,8,307.0,130,4098,14.0,72,1,chevrolet chevelle concours (sw)
73,13.0,8,302.0,140,4294,16.0,72,1,ford gran torino (sw)
74,14.0,8,318.0,150,4077,14.0,72,1,plymouth satellite custom (sw)
75,18.0,4,121.0,112,2933,14.5,72,2,volvo 145e (sw)
76,22.0,4,121.0,76,2511,18.0,72,2,volkswagen 411 (sw)
77,21.0,4,120.0,87,2979,19.5,72,2,peugeot 504 (sw)
78,26.0,4,96.0,69,2189,18.0,72,2,renault 12 (sw)
79,22.0,4,122.0,86,2395,16.0,72,1,ford pinto (sw)
80,28.0,4,97.0,92,2288,17.0,72,3,datsun 510 (sw)
81,23.0,4,120.0,97,2506,14.5,72,3,toyouta corona mark ii (sw)
82,28.0,4,98.0,80,2164,15.0,72,1,dodge colt (sw)
83,27.0,4,97.0,88,2100,16.5,72,3,toyota corolla 1600 (sw)
84,13.0,8,350.0,175,4100,13.0,73,1,buick century 350
85,14.0,8,304.0,150,3672,11.5,73,1,amc matador
86,13.0,8,350.0,145,3988,13.0,73,1,chevrolet malibu
87,14.0,8,302.0,137,4042,14.5,73,1,ford gran torino
88,15.0,8,318.0,150,3777,12.5,73,1,dodge coronet custom
89,12.0,8,429.0,198,4952,11.5,73,1,mercury marquis brougham
90,13.0,8,400.0,150,4464,12.0,73,1,chevrolet caprice classic
91,13.0,8,351.0,158,4363,13.0,73,1,ford ltd
92,14.0,8,318.0,150,4237,14.5,73,1,plymouth fury gran sedan
93,13.0,8,440.0,215,4735,11.0,73,1,chrysler new yorker brougham
94,12.0,8,455.0,225,4951,11.0,73,1,buick electra 225 custom
95,13.0,8,360.0,175,3821,11.0,73,1,amc ambassador brougham
96,18.0,6,225.0,105,3121,16.5,73,1,plymouth valiant
97,16.0,6,250.0,100,3278,18.0,73,1,chevrolet nova custom
98,18.0,6,232.0,100,2945,16.0,73,1,amc hornet
99,18.0,6,250.0,88,3021,16.5,73,1,ford maverick
100,23.0,6,198.0,95,2904,16.0,73,1,plymouth duster
101,26.0,4,97.0,46,1950,21.0,73,2,volkswagen super beetle
102,11.0,8,400.0,150,4997,14.0,73,1,chevrolet impala
103,12.0,8,400.0,167,4906,12.5,73,1,ford country
104,13.0,8,360.0,170,4654,13.0,73,1,plymouth custom suburb
105,12.0,8,350.0,180,4499,12.5,73,1,oldsmobile vista cruiser
106,18.0,6,232.0,100,2789,15.0,73,1,amc gremlin
107,20.0,4,97.0,88,2279,19.0,73,3,toyota carina
108,21.0,4,140.0,72,2401,19.5,73,1,chevrolet vega
109,22.0,4,108.0,94,2379,16.5,73,3,datsun 610
110,18.0,3,70.0,90,2124,13.5,73,3,maxda rx3
111,19.0,4,122.0,85,2310,18.5,73,1,ford pinto
112,21.0,6,155.0,107,2472,14.0,73,1,mercury capri v6
113,26.0,4,98.0,90,2265,15.5,73,2,fiat 124 sport coupe
114,15.0,8,350.0,145,4082,13.0,73,1,chevrolet monte carlo s
115,16.0,8,400.0,230,4278,9.5,73,1,pontiac grand prix
116,29.0,4,68.0,49,1867,19.5,73,2,fiat 128
117,24.0,4,116.0,75,2158,15.5,73,2,opel manta
118,20.0,4,114.0,91,2582,14.0,73,2,audi 100ls
119,19.0,4,121.0,112,2868,15.5,73,2,volvo 144ea
120,15.0,8,318.0,150,3399,11.0,73,1,dodge dart custom
121,24.0,4,121.0,110,2660,14.0,73,2,saab 99le
122,20.0,6,156.0,122,2807,13.5,73,3,toyota mark ii
123,11.0,8,350.0,180,3664,11.0,73,1,oldsmobile omega
124,20.0,6,198.0,95,3102,16.5,74,1,plymouth duster
125,19.0,6,232.0,100,2901,16.0,74,1,amc hornet
126,15.0,6,250.0,100,3336,17.0,74,1,chevrolet nova
127,31.0,4,79.0,67,1950,19.0,74,3,datsun b210
128,26.0,4,122.0,80,2451,16.5,74,1,ford pinto
129,32.0,4,71.0,65,1836,21.0,74,3,toyota corolla 1200
130,25.0,4,140.0,75,2542,17.0,74,1,chevrolet vega
131,16.0,6,250.0,100,3781,17.0,74,1,chevrolet chevelle malibu classic
132,16.0,6,258.0,110,3632,18.0,74,1,amc matador
133,18.0,6,225.0,105,3613,16.5,74,1,plymouth satellite sebring
134,16.0,8,302.0,140,4141,14.0,74,1,ford gran torino
135,13.0,8,350.0,150,4699,14.5,74,1,buick century luxus (sw)
136,14.0,8,318.0,150,4457,13.5,74,1,dodge coronet custom (sw)
137,14.0,8,302.0,140,4638,16.0,74,1,ford gran torino (sw)
138,14.0,8,304.0,150,4257,15.5,74,1,amc matador (sw)
139,29.0,4,98.0,83,2219,16.5,74,2,audi fox
140,26.0,4,79.0,67,1963,15.5,74,2,volkswagen dasher
141,26.0,4,97.0,78,2300,14.5,74,2,opel manta
142,31.0,4,76.0,52,1649,16.5,74,3,toyota corona
143,32.0,4,83.0,61,2003,19.0,74,3,datsun 710
144,28.0,4,90.0,75,2125,14.5,74,1,dodge colt
145,24.0,4,90.0,75,2108,15.5,74,2,fiat 128
146,26.0,4,116.0,75,2246,14.0,74,2,fiat 124 tc
147,24.0,4,120.0,97,2489,15.0,74,3,honda civic
148,26.0,4,108.0,93,2391,15.5,74,3,subaru
149,31.0,4,79.0,67,2000,16.0,74,2,fiat x1.9
150,19.0,6,225.0,95,3264,16.0,75,1,plymouth valiant custom
151,18.0,6,250.0,105,3459,16.0,75,1,chevrolet nova
152,15.0,6,250.0,72,3432,21.0,75,1,mercury monarch
153,15.0,6,250.0,72,3158,19.5,75,1,ford maverick
154,16.0,8,400.0,170,4668,11.5,75,1,pontiac catalina
155,15.0,8,350.0,145,4440,14.0,75,1,chevrolet bel air
156,16.0,8,318.0,150,4498,14.5,75,1,plymouth grand fury
157,14.0,8,351.0,148,4657,13.5,75,1,ford ltd
158,17.0,6,231.0,110,3907,21.0,75,1,buick century
159,16.0,6,250.0,105,3897,18.5,75,1,chevroelt chevelle malibu
160,15.0,6,258.0,110,3730,19.0,75,1,amc matador
161,18.0,6,225.0,95,3785,19.0,75,1,plymouth fury
162,21.0,6,231.0,110,3039,15.0,75,1,buick skyhawk
163,20.0,8,262.0,110,3221,13.5,75,1,chevrolet monza 2+2
164,13.0,8,302.0,129,3169,12.0,75,1,ford mustang ii
165,29.0,4,97.0,75,2171,16.0,75,3,toyota corolla
166,23.0,4,140.0,83,2639,17.0,75,1,ford pinto
167,20.0,6,232.0,100,2914,16.0,75,1,amc gremlin
168,23.0,4,140.0,78,2592,18.5,75,1,pontiac astro
169,24.0,4,134.0,96,2702,13.5,75,3,toyota corona
170,25.0,4,90.0,71,2223,16.5,75,2,volkswagen dasher
171,24.0,4,119.0,97,2545,17.0,75,3,datsun 710
172,18.0,6,171.0,97,2984,14.5,75,1,ford pinto
173,29.0,4,90.0,70,1937,14.0,75,2,volkswagen rabbit
174,19.0,6,232.0,90,3211,17.0,75,1,amc pacer
175,23.0,4,115.0,95,2694,15.0,75,2,audi 100ls
176,23.0,4,120.0,88,2957,17.0,75,2,peugeot 504
177,22.0,4,121.0,98,2945,14.5,75,2,volvo 244dl
178,25.0,4,121.0,115,2671,13.5,75,2,saab 99le
179,33.0,4,91.0,53,1795,17.5,75,3,honda civic cvcc
180,28.0,4,107.0,86,2464,15.5,76,2,fiat 131
181,25.0,4,116.0,81,2220,16.9,76,2,opel 1900
182,25.0,4,140.0,92,2572,14.9,76,1,capri ii
183,26.0,4,98.0,79,2255,17.7,76,1,dodge colt
184,27.0,4,101.0,83,2202,15.3,76,2,renault 12tl
185,17.5,8,305.0,140,4215,13.0,76,1,chevrolet chevelle malibu classic
186,16.0,8,318.0,150,4190,13.0,76,1,dodge coronet brougham
187,15.5,8,304.0,120,3962,13.9,76,1,amc matador
188,14.5,8,351.0,152,4215,12.8,76,1,ford gran torino
189,22.0,6,225.0,100,3233,15.4,76,1,plymouth valiant
190,22.0,6,250.0,105,3353,14.5,76,1,chevrolet nova
191,24.0,6,200.0,81,3012,17.6,76,1,ford maverick
192,22.5,6,232.0,90,3085,17.6,76,1,amc hornet
193,29.0,4,85.0,52,2035,22.2,76,1,chevrolet chevette
194,24.5,4,98.0,60,2164,22.1,76,1,chevrolet woody
195,29.0,4,90.0,70,1937,14.2,76,2,vw rabbit
196,33.0,4,91.0,53,1795,17.4,76,3,honda civic
197,20.0,6,225.0,100,3651,17.7,76,1,dodge aspen se
198,18.0,6,250.0,78,3574,21.0,76,1,ford granada ghia
199,18.5,6,250.0,110,3645,16.2,76,1,pontiac ventura sj
200,17.5,6,258.0,95,3193,17.8,76,1,amc pacer d/l
201,29.5,4,97.0,71,1825,12.2,76,2,volkswagen rabbit
202,32.0,4,85.0,70,1990,17.0,76,3,datsun b-210
203,28.0,4,97.0,75,2155,16.4,76,3,toyota corolla
204,26.5,4,140.0,72,2565,13.6,76,1,ford pinto
205,20.0,4,130.0,102,3150,15.7,76,2,volvo 245
206,13.0,8,318.0,150,3940,13.2,76,1,plymouth volare premier v8
207,19.0,4,120.0,88,3270,21.9,76,2,peugeot 504
208,19.0,6,156.0,108,2930,15.5,76,3,toyota mark ii
209,16.5,6,168.0,120,3820,16.7,76,2,mercedes-benz 280s
210,16.5,8,350.0,180,4380,12.1,76,1,cadillac seville
211,13.0,8,350.0,145,4055,12.0,76,1,chevy c10
212,13.0,8,302.0,130,3870,15.0,76,1,ford f108
213,13.0,8,318.0,150,3755,14.0,76,1,dodge d100
214,31.5,4,98.0,68,2045,18.5,77,3,honda accord cvcc
215,30.0,4,111.0,80,2155,14.8,77,1,buick opel isuzu deluxe
216,36.0,4,79.0,58,1825,18.6,77,2,renault 5 gtl
217,25.5,4,122.0,96,2300,15.5,77,1,plymouth arrow gs
218,33.5,4,85.0,70,1945,16.8,77,3,datsun f-10 hatchback
219,17.5,8,305.0,145,3880,12.5,77,1,chevrolet caprice classic
220,17.0,8,260.0,110,4060,19.0,77,1,oldsmobile cutlass supreme
221,15.5,8,318.0,145,4140,13.7,77,1,dodge monaco brougham
222,15.0,8,302.0,130,4295,14.9,77,1,mercury cougar brougham
223,17.5,6,250.0,110,3520,16.4,77,1,chevrolet concours
224,20.5,6,231.0,105,3425,16.9,77,1,buick skylark
225,19.0,6,225.0,100,3630,17.7,77,1,plymouth volare custom
226,18.5,6,250.0,98,3525,19.0,77,1,ford granada
227,16.0,8,400.0,180,4220,11.1,77,1,pontiac grand prix lj
228,15.5,8,350.0,170,4165,11.4,77,1,chevrolet monte carlo landau
229,15.5,8,400.0,190,4325,12.2,77,1,chrysler cordoba
230,16.0,8,351.0,149,4335,14.5,77,1,ford thunderbird
231,29.0,4,97.0,78,1940,14.5,77,2,volkswagen rabbit custom
232,24.5,4,151.0,88,2740,16.0,77,1,pontiac sunbird coupe
233,26.0,4,97.0,75,2265,18.2,77,3,toyota corolla liftback
234,25.5,4,140.0,89,2755,15.8,77,1,ford mustang ii 2+2
235,30.5,4,98.0,63,2051,17.0,77,1,chevrolet chevette
236,33.5,4,98.0,83,2075,15.9,77,1,dodge colt m/m
237,30.0,4,97.0,67,1985,16.4,77,3,subaru dl
238,30.5,4,97.0,78,2190,14.1,77,2,volkswagen dasher
239,22.0,6,146.0,97,2815,14.5,77,3,datsun 810
240,21.5,4,121.0,110,2600,12.8,77,2,bmw 320i
241,21.5,3,80.0,110,2720,13.5,77,3,mazda rx-4
242,43.1,4,90.0,48,1985,21.5,78,2,volkswagen rabbit custom diesel
243,36.1,4,98.0,66,1800,14.4,78,1,ford fiesta
244,32.8,4,78.0,52,1985,19.4,78,3,mazda glc deluxe
245,39.4,4,85.0,70,2070,18.6,78,3,datsun b210 gx
246,36.1,4,91.0,60,1800,16.4,78,3,honda civic cvcc
247,19.9,8,260.0,110,3365,15.5,78,1,oldsmobile cutlass salon brougham
248,19.4,8,318.0,140,3735,13.2,78,1,dodge diplomat
249,20.2,8,302.0,139,3570,12.8,78,1,mercury monarch ghia
250,19.2,6,231.0,105,3535,19.2,78,1,pontiac phoenix lj
251,20.5,6,200.0,95,3155,18.2,78,1,chevrolet malibu
252,20.2,6,200.0,85,2965,15.8,78,1,ford fairmont (auto)
253,25.1,4,140.0,88,2720,15.4,78,1,ford fairmont (man)
254,20.5,6,225.0,100,3430,17.2,78,1,plymouth volare
255,19.4,6,232.0,90,3210,17.2,78,1,amc concord
256,20.6,6,231.0,105,3380,15.8,78,1,buick century special
257,20.8,6,200.0,85,3070,16.7,78,1,mercury zephyr
258,18.6,6,225.0,110,3620,18.7,78,1,dodge aspen
259,18.1,6,258.0,120,3410,15.1,78,1,amc concord d/l
260,19.2,8,305.0,145,3425,13.2,78,1,chevrolet monte carlo landau
261,17.7,6,231.0,165,3445,13.4,78,1,buick regal sport coupe (turbo)
262,18.1,8,302.0,139,3205,11.2,78,1,ford futura
263,17.5,8,318.0,140,4080,13.7,78,1,dodge magnum xe
264,30.0,4,98.0,68,2155,16.5,78,1,chevrolet chevette
265,27.5,4,134.0,95,2560,14.2,78,3,toyota corona
266,27.2,4,119.0,97,2300,14.7,78,3,datsun 510
267,30.9,4,105.0,75,2230,14.5,78,1,dodge omni
268,21.1,4,134.0,95,2515,14.8,78,3,toyota celica gt liftback
269,23.2,4,156.0,105,2745,16.7,78,1,plymouth sapporo
270,23.8,4,151.0,85,2855,17.6,78,1,oldsmobile starfire sx
271,23.9,4,119.0,97,2405,14.9,78,3,datsun 200-sx
272,20.3,5,131.0,103,2830,15.9,78,2,audi 5000
273,17.0,6,163.0,125,3140,13.6,78,2,volvo 264gl
274,21.6,4,121.0,115,2795,15.7,78,2,saab 99gle
275,16.2,6,163.0,133,3410,15.8,78,2,peugeot 604sl
276,31.5,4,89.0,71,1990,14.9,78,2,volkswagen scirocco
277,29.5,4,98.0,68,2135,16.6,78,3,honda accord lx
278,21.5,6,231.0,115,3245,15.4,79,1,pontiac lemans v6
279,19.8,6,200.0,85,2990,18.2,79,1,mercury zephyr 6
280,22.3,4,140.0,88,2890,17.3,79,1,ford fairmont 4
281,20.2,6,232.0,90,3265,18.2,79,1,amc concord dl 6
282,20.6,6,225.0,110,3360,16.6,79,1,dodge aspen 6
283,17.0,8,305.0,130,3840,15.4,79,1,chevrolet caprice classic
284,17.6,8,302.0,129,3725,13.4,79,1,ford ltd landau
285,16.5,8,351.0,138,3955,13.2,79,1,mercury grand marquis
286,18.2,8,318.0,135,3830,15.2,79,1,dodge st. regis
287,16.9,8,350.0,155,4360,14.9,79,1,buick estate wagon (sw)
288,15.5,8,351.0,142,4054,14.3,79,1,ford country squire (sw)
289,19.2,8,267.0,125,3605,15.0,79,1,chevrolet malibu classic (sw)
290,18.5,8,360.0,150,3940,13.0,79,1,chrysler lebaron town @ country (sw)
291,31.9,4,89.0,71,1925,14.0,79,2,vw rabbit custom
292,34.1,4,86.0,65,1975,15.2,79,3,maxda glc deluxe
293,35.7,4,98.0,80,1915,14.4,79,1,dodge colt hatchback custom
294,27.4,4,121.0,80,2670,15.0,79,1,amc spirit dl
295,25.4,5,183.0,77,3530,20.1,79,2,mercedes benz 300d
296,23.0,8,350.0,125,3900,17.4,79,1,cadillac eldorado
297,27.2,4,141.0,71,3190,24.8,79,2,peugeot 504
298,23.9,8,260.0,90,3420,22.2,79,1,oldsmobile cutlass salon brougham
299,34.2,4,105.0,70,2200,13.2,79,1,plymouth horizon
300,34.5,4,105.0,70,2150,14.9,79,1,plymouth horizon tc3
301,31.8,4,85.0,65,2020,19.2,79,3,datsun 210
302,37.3,4,91.0,69,2130,14.7,79,2,fiat strada custom
303,28.4,4,151.0,90,2670,16.0,79,1,buick skylark limited
304,28.8,6,173.0,115,2595,11.3,79,1,chevrolet citation
305,26.8,6,173.0,115,2700,12.9,79,1,oldsmobile omega brougham
306,33.5,4,151.0,90,2556,13.2,79,1,pontiac phoenix
307,41.5,4,98.0,76,2144,14.7,80,2,vw rabbit
308,38.1,4,89.0,60,1968,18.8,80,3,toyota corolla tercel
309,32.1,4,98.0,70,2120,15.5,80,1,chevrolet chevette
310,37.2,4,86.0,65,2019,16.4,80,3,datsun 310
311,28.0,4,151.0,90,2678,16.5,80,1,chevrolet citation
312,26.4,4,140.0,88,2870,18.1,80,1,ford fairmont
313,24.3,4,151.0,90,3003,20.1,80,1,amc concord
314,19.1,6,225.0,90,3381,18.7,80,1,dodge aspen
315,34.3,4,97.0,78,2188,15.8,80,2,audi 4000
316,29.8,4,134.0,90,2711,15.5,80,3,toyota corona liftback
317,31.3,4,120.0,75,2542,17.5,80,3,mazda 626
318,37.0,4,119.0,92,2434,15.0,80,3,datsun 510 hatchback
319,32.2,4,108.0,75,2265,15.2,80,3,toyota corolla
320,46.6,4,86.0,65,2110,17.9,80,3,mazda glc
321,27.9,4,156.0,105,2800,14.4,80,1,dodge colt
322,40.8,4,85.0,65,2110,19.2,80,3,datsun 210
323,44.3,4,90.0,48,2085,21.7,80,2,vw rabbit c (diesel)
324,43.4,4,90.0,48,2335,23.7,80,2,vw dasher (diesel)
325,36.4,5,121.0,67,2950,19.9,80,2,audi 5000s (diesel)
326,30.0,4,146.0,67,3250,21.8,80,2,mercedes-benz 240d
327,44.6,4,91.0,67,1850,13.8,80,3,honda civic 1500 gl
328,33.8,4,97.0,67,2145,18.0,80,3,subaru dl
329,29.8,4,89.0,62,1845,15.3,80,2,vokswagen rabbit
330,32.7,6,168.0,132,2910,11.4,80,3,datsun 280-zx
331,23.7,3,70.0,100,2420,12.5,80,3,mazda rx-7 gs
332,35.0,4,122.0,88,2500,15.1,80,2,triumph tr7 coupe
333,32.4,4,107.0,72,2290,17.0,80,3,honda accord
334,27.2,4,135.0,84,2490,15.7,81,1,plymouth reliant
335,26.6,4,151.0,84,2635,16.4,81,1,buick skylark
336,25.8,4,156.0,92,2620,14.4,81,1,dodge aries wagon (sw)
337,23.5,6,173.0,110,2725,12.6,81,1,chevrolet citation
338,30.0,4,135.0,84,2385,12.9,81,1,plymouth reliant
339,39.1,4,79.0,58,1755,16.9,81,3,toyota starlet
340,39.0,4,86.0,64,1875,16.4,81,1,plymouth champ
341,35.1,4,81.0,60,1760,16.1,81,3,honda civic 1300
342,32.3,4,97.0,67,2065,17.8,81,3,subaru
343,37.0,4,85.0,65,1975,19.4,81,3,datsun 210 mpg
344,37.7,4,89.0,62,2050,17.3,81,3,toyota tercel
345,34.1,4,91.0,68,1985,16.0,81,3,mazda glc 4
346,34.7,4,105.0,63,2215,14.9,81,1,plymouth horizon 4
347,34.4,4,98.0,65,2045,16.2,81,1,ford escort 4w
348,29.9,4,98.0,65,2380,20.7,81,1,ford escort 2h
349,33.0,4,105.0,74,2190,14.2,81,2,volkswagen jetta
350,33.7,4,107.0,75,2210,14.4,81,3,honda prelude
351,32.4,4,108.0,75,2350,16.8,81,3,toyota corolla
352,32.9,4,119.0,100,2615,14.8,81,3,datsun 200sx
353,31.6,4,120.0,74,2635,18.3,81,3,mazda 626
354,28.1,4,141.0,80,3230,20.4,81,2,peugeot 505s turbo diesel
355,30.7,6,145.0,76,3160,19.6,81,2,volvo diesel
356,25.4,6,168.0,116,2900,12.6,81,3,toyota cressida
357,24.2,6,146.0,120,2930,13.8,81,3,datsun 810 maxima
358,22.4,6,231.0,110,3415,15.8,81,1,buick century
359,26.6,8,350.0,105,3725,19.0,81,1,oldsmobile cutlass ls
360,20.2,6,200.0,88,3060,17.1,81,1,ford granada gl
361,17.6,6,225.0,85,3465,16.6,81,1,chrysler lebaron salon
362,28.0,4,112.0,88,2605,19.6,82,1,chevrolet cavalier
363,27.0,4,112.0,88,2640,18.6,82,1,chevrolet cavalier wagon
364,34.0,4,112.0,88,2395,18.0,82,1,chevrolet cavalier 2-door
365,31.0,4,112.0,85,2575,16.2,82,1,pontiac j2000 se hatchback
366,29.0,4,135.0,84,2525,16.0,82,1,dodge aries se
367,27.0,4,151.0,90,2735,18.0,82,1,pontiac phoenix
368,24.0,4,140.0,92,2865,16.4,82,1,ford fairmont futura
369,36.0,4,105.0,74,1980,15.3,82,2,volkswagen rabbit l
370,37.0,4,91.0,68,2025,18.2,82,3,mazda glc custom l
371,31.0,4,91.0,68,1970,17.6,82,3,mazda glc custom
372,38.0,4,105.0,63,2125,14.7,82,1,plymouth horizon miser
373,36.0,4,98.0,70,2125,17.3,82,1,mercury lynx l
374,36.0,4,120.0,88,2160,14.5,82,3,nissan stanza xe
375,36.0,4,107.0,75,2205,14.5,82,3,honda accord
376,34.0,4,108.0,70,2245,16.9,82,3,toyota corolla
377,38.0,4,91.0,67,1965,15.0,82,3,honda civic
378,32.0,4,91.0,67,1965,15.7,82,3,honda civic (auto)
379,38.0,4,91.0,67,1995,16.2,82,3,datsun 310 gx
380,25.0,6,181.0,110,2945,16.4,82,1,buick century limited
381,38.0,6,262.0,85,3015,17.0,82,1,oldsmobile cutlass ciera (diesel)
382,26.0,4,156.0,92,2585,14.5,82,1,chrysler lebaron medallion
383,22.0,6,232.0,112,2835,14.7,82,1,ford granada l
384,32.0,4,144.0,96,2665,13.9,82,3,toyota celica gt
385,36.0,4,135.0,84,2370,13.0,82,1,dodge charger 2.2
386,27.0,4,151.0,90,2950,17.3,82,1,chevrolet camaro
387,27.0,4,140.0,86,2790,15.6,82,1,ford mustang gl
388,44.0,4,97.0,52,2130,24.6,82,2,vw pickup
389,32.0,4,135.0,84,2295,11.6,82,1,dodge rampage
390,28.0,4,120.0,79,2625,18.6,82,1,ford ranger
391,31.0,4,119.0,82,2720,19.4,82,1,chevy s-10
`;
  return `<div class="${"h-auto m-8 mx-auto flex justify-center items-center"}">${validate_component(Tabulator_1, "Tabulator").$$render($$result, { data: tdata, dataformat: "csv" }, {}, {})}</div>`;
});
export {
  Page as default
};
