# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?arrival_time=1643724000&avoid=tolls&origin=place_id:ChIJm2svzZKJK4gR_TC13Xrk8zs&destination=place_id:ChIJHfVL0gw5K4gRvKTcAQhsK6w&waypoints=place_id:ChIJQR-4QM1DK4gRpq4kO7kQFmA&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

```JSON
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJm2svzZKJK4gR_TC13Xrk8zs",
         "types" : [ "postal_code" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJQR-4QM1DK4gRpq4kO7kQFmA",
         "types" : [ "postal_code" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJHfVL0gw5K4gRvKTcAQhsK6w",
         "types" : [ "premise" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 43.686312,
               "lng" : -79.5884892
            },
            "southwest" : {
               "lat" : 43.4021883,
               "lng" : -80.3555516
            }
         },
         "copyrights" : "Map data ©2022 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "64.6 km",
                  "value" : 64593
               },
               "duration" : {
                  "text" : "50 mins",
                  "value" : 2987
               },
               "end_address" : "Mississauga, ON L5L 2Z4, Canada",
               "end_location" : {
                  "lat" : 43.5435137,
                  "lng" : -79.6941502
               },
               "start_address" : "Cambridge, ON N3H 5E3, Canada",
               "start_location" : {
                  "lat" : 43.4022724,
                  "lng" : -80.35464619999999
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "45 m",
                        "value" : 45
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 7
                     },
                     "end_location" : {
                        "lat" : 43.4021883,
                        "lng" : -80.35519099999999
                     },
                     "html_instructions" : "Head \u003cb\u003ewest\u003c/b\u003e on \u003cb\u003eWhitley St\u003c/b\u003e toward \u003cb\u003eLaurel St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "e_|gGpgmiNDf@HbA"
                     },
                     "start_location" : {
                        "lat" : 43.4022724,
                        "lng" : -80.35464619999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 139
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 33
                     },
                     "end_location" : {
                        "lat" : 43.4034065,
                        "lng" : -80.3555516
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLaurel St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "u~{gG|jmiNcARa@Hc@JiB\\"
                     },
                     "start_location" : {
                        "lat" : 43.4021883,
                        "lng" : -80.35519099999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.3 km",
                        "value" : 2270
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 244
                     },
                     "end_location" : {
                        "lat" : 43.4079347,
                        "lng" : -80.328199
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at the 1st cross street onto \u003cb\u003eEagle St N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eWaterloo Regional Rd 39\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "if|gGdmmiNGo@QoBGo@KkAQmBQiBMmAEg@WqCKcAQsB_@wD]wDQqBIiAQwB]oDi@oFYuCAQOuAGk@WoCi@sFWiC[}CUuCOyAGq@WoCcAsKKgAk@oFq@}Ga@eES}Bs@kHO}AGq@Gg@AMFK?A?UKyAI_A"
                     },
                     "start_location" : {
                        "lat" : 43.4034065,
                        "lng" : -80.3555516
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 318
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 52
                     },
                     "end_location" : {
                        "lat" : 43.4106384,
                        "lng" : -80.3282708
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eHespeler Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eWaterloo Regional Rd 24\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qb}gGfbhiNGm@[HqARcANq@Jo@Hc@BU?M?QAcA?O?i@CKA]C"
                     },
                     "start_location" : {
                        "lat" : 43.4079347,
                        "lng" : -80.328199
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "45.1 km",
                        "value" : 45060
                     },
                     "duration" : {
                        "text" : "25 mins",
                        "value" : 1516
                     },
                     "end_location" : {
                        "lat" : 43.5663074,
                        "lng" : -79.83436069999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to merge onto \u003cb\u003eON-401 E\u003c/b\u003e toward \u003cb\u003eToronto\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "os}gGtbhiNAGCEACCAAACACAKAMCwAU[ISIUKg@WUOYW_@g@c@q@e@u@EIw@mAS[Ye@a@s@Q]Sc@Oe@Og@Ke@Kk@Gc@CWAKA_@Eq@EqAGuBKsCEmAGsB?IAEAGCEEQIwF?o@Aq@EcDCsAGgGCqACsCAq@Ae@?IGyEG_E?AGuFMgLEuDKyIIeGAs@?SGaFAm@?CCcBCw@Ag@?AAc@AMAa@E{@Gy@IgAI}@Is@Io@AEIu@Oy@]qBUkACMQ}@SaA_@iBq@iDg@mCi@mCAICICQk@sCeCiMAEAKAE{BiLsAcH[yA{@uDc@iBIYOk@ACk@qBwByGEOEOK[{@sCQi@KW?AK[gAmDcBiFkAsDeAcDSq@M_@Qg@CMK[g@}A[eAIUGSGWGQY_AGUaCoHgAiDy@iC?AOg@o@mBaBmFQi@y@iCGO_@mA}@{Ci@}B]uAIa@S}@yA{GI]Mo@k@iCUeAq@_DOm@AIaAoEQy@EUs@_DG[EQuAuGgA_F}AiH_BmHqBkJYqAaC{Kg@}B[yA{@uDMq@gAaFu@oDGSGYGWESi@iCKg@UcAG[S{@I]e@_Cs@_DI_@o@yCKe@o@oCq@_Du@aEk@yDUgCS}A{@uHCIm@uFw@kHIu@w@_Hs@oGUoBc@_EGg@[uC?Am@mFIi@?Ek@kFi@}Eg@oEMoACSAA}@mI?Ak@iFcAeJyDk]SoBQ_Bc@_EAIEe@A?u@cHm@oFIo@KcAW{BGo@M_AoCyVmAcL_@_D_@oDIo@YoCm@oF?CkByPCQc@wDk@oF[oC_AmISkBK{@CUAIa@}DkDg[OuA{@sHMgA?GUmBeAqJQcBo@{Fc@_E?AGm@AAcBwOMkAmAyKuAmMSmBS_CK}AKaBKmB?KKuCEmCCeC?_EBoDBuD@cBFiM@q@?[@cB@_@?e@DyIBuC?o@FkJ@{@?gA@q@?eA@wABaDBuEFeJ?[?S@sBBaFDaF?cABiCBsG@_B?o@BoB?q@?kFCgDIeDKyBEaASkDQwBKiAW{B[eCQqAKo@[oBc@_Ck@kCK_@gAoEa@yACGe@}AK[Oc@a@kAqAuDq@qBgAaDiA}Ci@{AOc@oAmDOa@{@eCISqAsDUs@M[Sk@Ww@{@aCa@qAK_@]iA[mAe@mBOq@s@kDg@mCWwA_AeFKc@o@oDSeAKm@]eBk@{CO{@UkAYyAaAiFe@iCg@kCKm@CK{@{EMm@QcAy@qEMm@Km@Mm@[cBkAkGq@uD[_BKo@QaAGYg@iCe@iCCGe@kCKg@Km@Ic@i@uCQ{@Ms@G]i@qCGa@Mk@?CUiAE[eA}F]gBMq@c@{BOu@Ko@Mo@_@sBk@_DCKIa@Mm@UoA]gBKo@Kk@[}Ae@iCCMG_@[}AY_B_AcFCOuAsHMk@_AgF]kB{@wEAE_A_FAI{CmPGYi@wCy@kEGYAGIe@AEMo@Ie@WuAWqAWyAUmAg@oCo@oDEQESAGg@kCKk@Mo@Ie@AGYyAg@mCUqAg@mCUqAOy@Mw@Ii@COEWOaAOmAKy@K}@KeAAGEa@AMEi@AEUuCAe@Eo@AGCw@QaEAu@Aa@CaBCwAC{@?GCcBCyA?G?e@AKAq@CmBGkDEoC?KCeB?C?i@AIAg@?KA}AA?As@Ag@CiBAq@Ai@Ao@Aq@E{CAi@?GGoFK_HIoFEmDEsCCaBCcBCgAAcA?GAg@?GIsEIeC?WCY_@}GEo@AGMaBAEWoCWuBU_BMy@AGGe@AGIg@[gBo@sDc@{B]sBc@}BAE?AIe@AGIc@Ow@W{Ac@cCOu@Y}AKk@Ig@[aBe@mCMm@W{AKg@AEUqAAK_AgFc@cCMm@AGIe@AGKm@e@cCMu@Kk@?Ai@qCa@{BE[EQKm@ScAG]]mBKi@Mq@G[EQKm@?ASiAEQIi@ESUoAKk@Ie@Ia@k@}CKo@Km@AAa@wBa@aCOs@EOEOE[EOGc@?AKk@Ms@UuAO{@Mm@G]COCOIa@G[UsAAEY{AMm@UgAG[EOGYIc@Gg@Ci@?SAIC]I]Oo@Ia@Mo@Ke@Ke@EU[yA]{AGWCM[mAYmAIYQo@IUI]Qm@Uo@W{@Qi@_@gAAACGOc@KWSg@Um@Yq@c@cAg@kAIOg@iACEAASg@Uc@Ui@Yo@_@w@GOg@gACEuA_DMW[s@Ue@Uk@IO_AsBoAsCg@eAi@kAm@wAWe@g@kAk@oACG]s@Uk@u@}AO_@[q@i@kAqE_K_@{@eA{BO[]w@g@iA_@w@Uk@GOy@eBIUUe@EKy@gBuA_DUi@_@y@KQ[u@qBkEkAoC]{@KWKUWm@[_AY_AK]Qq@Ka@GYKc@Kg@SgAG]G]E]EWACCWCWCIEe@CQE_@AMEo@AMEe@C_@?IEm@EaAAYCa@?OEo@Cq@AKEgACe@Cq@Co@IiB?OAIAU?II_BGoAC{@?OAME}@Cq@AEA_@Ce@Co@EmAWiGGuACYCaAGkA?AEw@Eu@KoCKaCE{@E_AAOEm@KiAKiAKq@E[CSCSEYIg@I_@Q_AWiAMi@ACOm@_@qA[_AEMEI]aAa@_AEIKUOYk@iA]k@Q]W_@QWW_@SWIMY_@[]g@k@a@a@KIUUMKACs@k@w@k@]UAAKIiBqA}@o@GE]YMIu@g@_@Ye@_@QMCC_BgAcFmD_Aq@]WGCUQIG]WsAaAi@_@}AgAKIqA_A_@W}@o@{CwB_@Yy@k@uF_E[UiA}@CCYU[YAA][{@w@][w@{@]]EEUWo@w@mAyAe@o@GIOSACc@m@oAkBKQYc@IOk@aAQ]Uc@We@o@kAQ[CIo@iAqAeCa@w@o@iAm@kAWe@Ue@o@kAUc@We@m@kAWe@Q_@CEo@iAWe@w@wAMWWe@We@_CkEiDqGa@w@Q]o@kAeAoBq@qAS_@eAoBu@uAuAkCWe@We@kAyBO]IMMU?AWc@{AuCAACEg@aAWi@u@wAy@eBm@uA]}@So@Sk@Qm@Qq@_@{AYuA?EKo@AGSoAE_@SuAIiAKoAEg@KwB]}FU_EAUIoAeBwZOoCi@uJQ}C?Ag@qIMuBGcAUgEs@sLIeAEa@UeBOcACQEUCOEWO}@[}Aa@aBc@eBy@qCc@uA_@eAQg@Qe@g@oAyBuFEKw@}BQe@K[AACIa@kAUu@y@{B[}@yBiG_@eAGQ[{@O]GSM]CGSk@CEe@sAkAgDMa@EMIQY{@_@aAyCoIEOwBgGEMcAqCACQe@Us@{AgEsB{FQi@GOaAyCAAOi@a@uAGSk@{B[oAQu@_@gBO{@I[YiBa@mCEWUgBYqCMoAOuBE_@WgDC[MaBGm@m@eISwCEc@C_@]yEKgAyBsY[uCc@uDm@}DWqAu@cD_A}D{@_Du@aCsByFa@aAYu@Si@Sa@g@}@s@{AiBmDa@u@u@sAi@y@aBoBkFsFkIcLUSCCEEY]iIyHyCqD_@g@{B}CiD}E]a@[a@s@w@sA_BaEuEm@q@kAoAkAoAaAeAyAaBcAiAq@u@_@a@gAmAiCsCo@q@kCuCaCkCcDqDiAmAqEwGYa@Ya@sA}AY_@]_@yAeBu@{@sGmHkE}EuAgBmDeEW]SM"
                     },
                     "start_location" : {
                        "lat" : 43.4106384,
                        "lng" : -80.3282708
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 688
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 48
                     },
                     "end_location" : {
                        "lat" : 43.5694635,
                        "lng" : -79.8274249
                     },
                     "html_instructions" : "Take the \u003cb\u003eTrafalgar Road\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRegional Rd 3\u003c/b\u003e exit toward \u003cb\u003eHalton Hills\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eOakville\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eGeorgetown\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "m`|hGvsgfNI]GMKQ]g@g@o@YYcB_Ci@w@sCqEa@eBUiBIcC?ES}DCa@O{@Sy@M[S]CESYKOQW"
                     },
                     "start_location" : {
                        "lat" : 43.5663074,
                        "lng" : -79.83436069999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "9.1 km",
                        "value" : 9137
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 559
                     },
                     "end_location" : {
                        "lat" : 43.5100419,
                        "lng" : -79.74956229999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eTrafalgar Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eHalton Regional Rd 3\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ct|hGjhffNJQ@CVc@hAmB^m@BEHILSLQ`@o@rAkBhCyDd@u@Va@Xk@fA{Ax@kAXa@xA_C@CL?h@_A\\m@`@w@`@{@Ra@Xi@b@y@n@qA^q@fAoBHO^q@PYHO\\e@FM~AyBjBmCfBwB~@y@Xe@h@o@?Av@_AnDsEDGTWr@cAhBoCvBaDh@w@nDoFnAkB~@uA|BcDfBiCLSx@mAdBkCvA{BpE}G`EiG`DcFhAaBr@eAdA_Bh@y@`LsPtB_D@AFKn@_A|CuEfC{D@AzCsET[lAeBt@eAD[b@s@rB{C~CuEj@y@rAoBpD}FhAmBb@w@NCl@aApAwB\\i@fAaBXa@JQ`AuAp@gArCkEXe@lAeBvA{Bb@q@jAgBvAwBJQrAmBfBgChAaBxBcDBEpAoBT]~C{ERWjAiBHKlAiBf@w@Xa@rB}CXc@b@s@T[zBcDZe@^k@d@o@xEgHrFeIZe@LQ|D}FdCoDtCiE|@sAT[PWh@y@nAkBtCiEdA}ALQbCuDvDyFj@y@j@{@fAcB`BeCl@}@b@m@x@mAbAwA|@iAnAyATW~AaBx@q@f@_@pCwB~BeBnAaAf@a@|BmBn@g@dA{@HE`@_@bAy@v@w@VWNQ@Cf@i@n@}@j@u@|AaCpByC"
                     },
                     "start_location" : {
                        "lat" : 43.5694635,
                        "lng" : -79.8274249
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 840
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 59
                     },
                     "end_location" : {
                        "lat" : 43.50459679999999,
                        "lng" : -79.7423441
                     },
                     "html_instructions" : "Continue straight to stay on \u003cb\u003eTrafalgar Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eHalton Regional Rd 3\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "w`qhGvaweNJMBEHMxBaDHMv@eADEFIBGNUJMNW@ALQvDwF|B}CT_@v@eAbCaDjAiBVa@LSLQhBuCh@}@"
                     },
                     "start_location" : {
                        "lat" : 43.5100419,
                        "lng" : -79.74956229999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.9 km",
                        "value" : 2938
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 170
                     },
                     "end_location" : {
                        "lat" : 43.52162140000001,
                        "lng" : -79.7163283
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eWilliam Halton Pkwy\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "w~ohGrtueNPUMUq@eAYa@?AaCiDYa@Yc@W_@AAKQMOm@_A_@e@k@s@m@g@]YMKKEcDoDiCsCuB}BYY_@a@kDsDqAwAAAY[wA_BmBuBWYCE_@_@qByBu@y@AC[]}@cAiDgDYYy@aAu@{@AAc@g@m@q@cBmBKOAAYa@o@y@CEAAWe@Q[Yk@AAWg@g@{Ak@yB?ACEKg@Kk@Im@Gi@?E?AGq@M_BCa@AMEo@_@uFEo@AACm@KaBCa@OoBUuBEYUsAUgA]_AUm@]_AIOu@wAyAyBs@y@GGi@k@MMCCIKa@c@g@w@e@k@UYsAyASW"
                     },
                     "start_location" : {
                        "lat" : 43.50459679999999,
                        "lng" : -79.7423441
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.9 km",
                        "value" : 2928
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 257
                     },
                     "end_location" : {
                        "lat" : 43.54195199999999,
                        "lng" : -79.6935137
                     },
                     "html_instructions" : "At the roundabout, take the \u003cb\u003e2nd\u003c/b\u003e exit onto \u003cb\u003eBurnhamthorpe Rd W\u003c/b\u003e",
                     "maneuver" : "roundabout-right",
                     "polyline" : {
                        "points" : "cishG`rpeN?C@E?C?E?EAC?C?AACAEACACACCCAACCCAAACAC?C?C?C?C?C@C@i@_@qAwAGG{AcBYQKMOUOQkAqAaAgAKK_BgBaAgAu@_AWYu@{@g@i@y@_AsCeD}IeKeCuC[]uA_BGE_BmBGG[_@mAuAEG[]s@{@w@}@o@q@c@g@WYc@q@qBoCaBmBMQkC{CmAyACE[]kC}CgAmAoAuAMOW[_CmCc@e@iBsB?A[]eD{DeAmAw@_AsA{AaBkBKIOQSUw@_AY_@k@s@GI{AiBq@iAO]"
                     },
                     "start_location" : {
                        "lat" : 43.52162140000001,
                        "lng" : -79.7163283
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 138
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 18
                     },
                     "end_location" : {
                        "lat" : 43.5428031,
                        "lng" : -79.69471039999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eFolkway Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ehwhGlcleNSXk@j@a@\\WZOVIPIXKj@"
                     },
                     "start_location" : {
                        "lat" : 43.54195199999999,
                        "lng" : -79.6935137
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "92 m",
                        "value" : 92
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 24
                     },
                     "end_location" : {
                        "lat" : 43.5435137,
                        "lng" : -79.6941502
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRomark Mews\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "omwhG|jleNQKICGAIEGEIIAAGGQSOOOMOIAA"
                     },
                     "start_location" : {
                        "lat" : 43.5428031,
                        "lng" : -79.69471039999999
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "25.6 km",
                  "value" : 25552
               },
               "duration" : {
                  "text" : "18 mins",
                  "value" : 1077
               },
               "end_address" : "Terminal 1, Mississauga, ON L5P 1B2, Canada",
               "end_location" : {
                  "lat" : 43.6836189,
                  "lng" : -79.6145631
               },
               "start_address" : "Mississauga, ON L5L 2Z4, Canada",
               "start_location" : {
                  "lat" : 43.5435137,
                  "lng" : -79.6941502
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "92 m",
                        "value" : 92
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 25
                     },
                     "end_location" : {
                        "lat" : 43.5428031,
                        "lng" : -79.69471039999999
                     },
                     "html_instructions" : "Head \u003cb\u003esouthwest\u003c/b\u003e on \u003cb\u003eRomark Mews\u003c/b\u003e toward \u003cb\u003eFolkway Dr\u003c/b\u003e",
                     "polyline" : {
                        "points" : "}qwhGlgleN@@NHNLNNPRFF@@HHFDHDF@HBPJ"
                     },
                     "start_location" : {
                        "lat" : 43.5435137,
                        "lng" : -79.6941502
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 123
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 29
                     },
                     "end_location" : {
                        "lat" : 43.5420542,
                        "lng" : -79.6936362
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eFolkway Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "omwhG|jleNJk@HYHQNWV[`@]j@k@"
                     },
                     "start_location" : {
                        "lat" : 43.5428031,
                        "lng" : -79.69471039999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 802
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 74
                     },
                     "end_location" : {
                        "lat" : 43.5364824,
                        "lng" : -79.69994079999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBurnhamthorpe Rd W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "yhwhGfdleNJVt@dA~AhBTVx@`Az@`ARVJHHNv@~@xBlCx@|@dEtEdAjAjBpB\\`@~BrC"
                     },
                     "start_location" : {
                        "lat" : 43.5420542,
                        "lng" : -79.6936362
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 687
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 60
                     },
                     "end_location" : {
                        "lat" : 43.5407286,
                        "lng" : -79.70600019999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eWinston Churchill Blvd\u003c/b\u003e (signs for \u003cb\u003eON-407\u003c/b\u003e)",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_fvhGrkmeN?F@J?J?JALADq@bAORw@jAEH]f@y@jAMRk@|@w@jAsAtBY`@qApBqAhBoAbB{BlDg@t@"
                     },
                     "start_location" : {
                        "lat" : 43.5364824,
                        "lng" : -79.69994079999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "14.7 km",
                        "value" : 14721
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 511
                     },
                     "end_location" : {
                        "lat" : 43.6443767,
                        "lng" : -79.64707
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eON-403 E\u003c/b\u003e via the ramp to \u003cb\u003eToronto\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "q`whGnqneNE@E@C@C@EFIJSVIJSTKLMPIHSVSTKLMLYVMLSPQLURQJUPULQJOHA?KFSHC@OFMBG@QDUBQ@S@OAQAOAUGSESIIECAGEQKECGEQOCCMKOO_@_@e@e@]]o@q@m@m@_BiBgAoAOOCCCCC?C?C@E@W]_@g@eAqA_AiAuBmCmB_CcC}CW[m@u@_AiAs@{@_@c@u@}@Y_@o@y@oA{AGIo@y@y@aAqAaBMOo@y@k@w@_AqAm@{@W[AC[e@S[OUIKaAaB_@k@c@u@OSo@gAgDgGy@{Ag@aAeB_DYi@wFeK_AsBUc@W]MWS]_BwCsDcHEIcAgB_AeBGKi@_AIOGMiBuCgAmBc@q@g@w@o@_AmEgG}@oAm@y@e@i@k@o@IK[]y@}@u@{@_AaAs@u@OOaA_AGGq@o@a@]AA][CCq@m@IIa@_@uAgAuAgACCa@[u@m@eAw@YWc@]_@[yAmAYU]YECaCmBu@m@kAaA]UeEkDyBiBsC_CIESQIG]Y]Yu@m@}AmAk@g@k@e@_Aw@eBaBo@m@IIIG?A}GoHoGaHc@e@eCqC[[wB}BqByBmAqAeAiAUWeBiBgAkAY[_CgCkBqBMMm@o@[_@KKAAQQqFaGcBiBaAeA[]k@m@uB}BeBkBgBqBeEuEuA_Bo@y@y@y@UU_CcCoAsAoBsBu@y@QQy@y@[]qEwEm@o@KK[]mAqAc@g@w@}@w@}@QSy@_AqBuBIG[Us@y@oDaEGG{CkDk@m@mBsB}L_N]]gAiAe@i@uA_BaHsHCCuKmL{@_A}@aA{CeDmBuBy@{@a@e@uC}CQQaAaAs@m@QOe@Ys@e@UMe@We@Uy@[SIk@Qc@MaASOE[G_@G}@I}@GUAg@Ak@?g@@_ABi@DSBg@FSBi@Hg@L}@Vy@Vi@R}@`@cBv@SLy@d@SLe@ZyAhAe@^SPa@^MJa@b@u@v@m@r@UZc@j@Y^eJ~MeHlK_@j@_AvAcBdC{AzBUZ{@nAi@v@qAlBSXeCrDa@l@kBpC_@l@_AtAy@nAA@UZA@qAlBuAlBe@r@MNw@jAkBhCcChDcAvAm@v@e@h@y@dAMPaD~Dw@`A{@dAgAnAcAdAYXOLc@\\YRe@ZgAn@oAh@a@Lg@LSDUD]D}@LU@Y@Y@Q?i@@c@?KAO?WC[AOCWEE?]GA?i@Ki@M[KYIeAc@g@Um@a@m@_@SQi@c@c@c@e@g@m@u@Wa@Ya@Q[w@wASe@ISQc@Um@KWo@iBoAyDa@sAGKU{@a@uAu@mCY}@MYSQ"
                     },
                     "start_location" : {
                        "lat" : 43.5407286,
                        "lng" : -79.70600019999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.6 km",
                        "value" : 2624
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 84
                     },
                     "end_location" : {
                        "lat" : 43.6566266,
                        "lng" : -79.6192705
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eOntario 401 Express\u003c/b\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "khkiGdaceNe@gBGSi@kBK_@CKEQKYaGoSkAaEwBqH{@{CcAmD{CiKwCaK_CcImA}DUq@eAgDgG}QWu@wCyHGQg@kAiCmGc@cAs@}AIO[u@k@mAo@uAc@_Ai@iAg@_AmB}DUe@m@mA"
                     },
                     "start_location" : {
                        "lat" : 43.6443767,
                        "lng" : -79.64707
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 km",
                        "value" : 1811
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 64
                     },
                     "end_location" : {
                        "lat" : 43.6650661,
                        "lng" : -79.6001366
                     },
                     "html_instructions" : "Take the \u003cb\u003eON-427\u003c/b\u003e exit toward \u003cb\u003eRenforth Drive\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "}tmiGls}dNGc@EYI]Yo@[w@o@{AEMSg@Yu@Wu@Oe@Oe@e@_BKa@CIa@cBm@gCGYaAwDSq@c@oAEIQe@oAmCk@iAsB{De@uA}AoCo@sAcAyBg@qAYs@[_AM]m@iBcAcDg@}AMc@]iAw@mCu@mCiBcH{CaL"
                     },
                     "start_location" : {
                        "lat" : 43.6566266,
                        "lng" : -79.6192705
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 548
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 19
                     },
                     "end_location" : {
                        "lat" : 43.6672376,
                        "lng" : -79.5940267
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e, follow signs for \u003cb\u003eRenforth Dr\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "uioiGz{ydN_@yAuDwNCIuAkFYkA[mAYkAq@wC"
                     },
                     "start_location" : {
                        "lat" : 43.6650661,
                        "lng" : -79.6001366
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.1 km",
                        "value" : 2097
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 86
                     },
                     "end_location" : {
                        "lat" : 43.6825699,
                        "lng" : -79.5951694
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e at the fork, follow signs for \u003cb\u003e427 N N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRoute 427 N\u003c/b\u003e and merge onto \u003cb\u003eON-427 N\u003c/b\u003e",
                     "maneuver" : "fork-left",
                     "polyline" : {
                        "points" : "gwoiGtuxdNMUEWc@mBcBsICIWgAa@yAAGSm@So@Yq@[o@]g@CEOSOS][_@_@c@Yk@Yq@UEAWGg@Io@E[?M?aAHg@HODQF[Jg@VA?a@XSNOLSRcAbA_@b@w@|@w@|@uA`Ba@b@UTIHOLCBOLMHGFSJ]PGDa@Lo@RqA^SFEBKLgBRM@eBPcDZmAJmANC@wALy@J}AZqA^OFkAd@yAt@aAt@q@n@u@r@o@x@o@|@Yb@K\\"
                     },
                     "start_location" : {
                        "lat" : 43.6672376,
                        "lng" : -79.5940267
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 406
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 19
                     },
                     "end_location" : {
                        "lat" : 43.6850211,
                        "lng" : -79.5988148
                     },
                     "html_instructions" : "Take the \u003cb\u003eDixon Rd\u003c/b\u003e exit toward \u003cb\u003eAirport Rd\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "awriGx|xdNU?A@C@EDEFCFCDEFCFEHCBCF_@r@Wj@OZS^O\\w@`BwAtC_@r@Q\\OVQZQTQTSRYX"
                     },
                     "start_location" : {
                        "lat" : 43.6825699,
                        "lng" : -79.5951694
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 809
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 44
                     },
                     "end_location" : {
                        "lat" : 43.6854091,
                        "lng" : -79.60809119999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "kfsiGpsydNGNEHSRURc@b@QPCBYZIHMRGJGHELABCHIXGXCNAJCPCT?V@X@V@PB\\BTFj@NrAHt@PnABXLz@L`AJ|@BPHj@?B@J@JBR?D?`@@l@@`@?P?d@?J?h@?jBA`B@j@@F@d@?L?BBj@?L?F@hB?x@"
                     },
                     "start_location" : {
                        "lat" : 43.6850211,
                        "lng" : -79.5988148
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 178
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 10
                     },
                     "end_location" : {
                        "lat" : 43.6856672,
                        "lng" : -79.61027869999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e at the fork, follow signs for \u003cb\u003ePeel Regional Rd 1\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eArrivals\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eArrivées\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eDepartures\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eDéparts\u003c/b\u003e",
                     "maneuver" : "fork-right",
                     "polyline" : {
                        "points" : "yhsiGpm{dNAl@El@Cl@ALIjAG|@?HI|@?DIdA"
                     },
                     "start_location" : {
                        "lat" : 43.6854091,
                        "lng" : -79.60809119999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 188
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 12
                     },
                     "end_location" : {
                        "lat" : 43.68611,
                        "lng" : -79.61252379999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e at the fork",
                     "maneuver" : "fork-left",
                     "polyline" : {
                        "points" : "mjsiGf{{dN?XCj@Iv@CTGh@OrAc@hCEPCP"
                     },
                     "start_location" : {
                        "lat" : 43.6856672,
                        "lng" : -79.61027869999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 466
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 40
                     },
                     "end_location" : {
                        "lat" : 43.6836189,
                        "lng" : -79.6145631
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e at the fork\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "fork-left",
                     "polyline" : {
                        "points" : "emsiGfi|dNGf@Ih@G^A@CTGd@C`@?\\BTBPBJBHDHDH?@DFHHFHBB@?DDVL@?FBTH@@@?JDPH@@@?TLHB?@NFNJHDJHLDDB\\XDDJHLJLHPFD?HBH?F?HAHCRIRM\\c@\\c@\\i@"
                     },
                     "start_location" : {
                        "lat" : 43.68611,
                        "lng" : -79.61252379999999
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "e_|gGpgmiNNjBeB\\mCh@Y_Dw@sIw@kIeEwd@iDu]sF{k@yBmUIsBKqBQmBmB\\iEh@yBAcBIKSkDu@mBkAoByCgCcEeAoCs@}Hi@iNgAey@cAqw@y@gKwCePqSidAuPqi@{Mob@oHsUgHwYkSs_AcS{~@eEuRcEkTiBeP}G_n@qEoa@sPe|AcPmyAuQmaBaFud@kEua@c@yHUiRPs[NwWl@seAHsOMkRw@_NqA}KwBkLyBqIyJqYgIqU}EkOqOmx@cXqxAuYk~AaXmxA}AmK_AaKy@e\\mBytA[gO}BcXcFwYaQy`AkKok@oDgSsCsPoGuVsHsQae@idAcQc`@{EeMaB}HcAuKw@oR{A__@w@iQy@gIcBgIyCkIaE}GyDeEgO}K{_@iXoNmKkFiFqH}JkE{H_O}XsYsi@cPa[sBoF}AqGqA}KkKijBiAaJqBcJoCuIqGyPsHgTgMa^{Li]cEeNiDuQ}BeWwFeu@eC{QgFcScE{KyEiJcFsHkFsFkIcLYWcOoOcJeMmRgT}RmTeH}H{GeJaDaEi\\y_@uF}H}DiGw@oEa@iJeAoDu@gAjDyFlLgQnDqFvBeDtGeMtKoOfKeM`t@cgA|k@s{@xTw]~HuLpb@go@tYcc@~o@{`AdQsWfFsGrIkHvOaMhH}HbNgSbR{W|C}Ez@sA_A{AuDoF_AwAgCiDeBsA}UkWcMeN_T}UkC{FyAsHgAyOwAgOgBuFmE{G}DyE}BoC@UK_@yAk@cVaX{d@ci@{OyRiN_PqXq[eD{EyB~Bo@nBm@W}AuAjAdAb@VZNTeArAcBj@k@JVtCnD~CrDfEfFpLpM~ChECj@_ClDiKzOeIpLSFeBvBoCnCwBtAqBj@uCYkAw@_IiIqBcB}PiT_Wo[sEaHmKcRa^kp@aQsWuIyJuPeOgb@c]cHwFsPqPyi@kl@ef@ci@}^m`@el@ko@yb@_e@kGwG_D}B{CwAeD}@qHk@sHr@_FdBeExBaI~GmZlc@iZtc@gQvVyNpQqCjCwEhC_G~@iEC}Dw@uDeBoCyBeCaDgBmDsFiPkFuPcPwj@wN}f@qLu^kMm[qJgSeAiDkBqE{CkJiFoRoOy[iGkRcTix@}GmZ_AsD}A_EaAuAmCoBwBi@{CBqDtAaJvJ{BtBwFpBgFt@cIx@aItAwFxCgEzEe@`AW@SVS^kDfHcFzIkCtCmAjB]hDl@rGjAfJJtDFhTg@`IwA`Nq@rEBfBRh@b@f@xAl@xDbCzAClB_C"
         },
         "summary" : "ON-401 E",
         "warnings" : [],
         "waypoint_order" : [ 0 ]
      }
   ],
   "status" : "OK"
}
```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
