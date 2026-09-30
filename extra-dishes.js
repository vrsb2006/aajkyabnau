/* extra-dishes.js — adds home-style veg lunch/dinner dishes to Aaj Kya Banaun?
   Load AFTER the main inline <script>, just before </body>:
   <script src="extra-dishes.js"></script>
   Row format: [name, cuisine, time, serve note, optional "D" (dinner only) or "L" (lunch only)]
   No recipe/nutrition yet: the app shows "No recipe details for this one yet". */
(function(){
const X=[
// ---- Sabzis: dry / semi-dry, everyday ----
["Bhare Karele (Stuffed Bitter Gourd)","Punjabi","medium","With roti"],
["Karele Pyaz ki Sabzi","Punjabi/Haryanvi","quick","With roti or dal-chawal"],
["Bharwa Bhindi (Stuffed Okra)","North Indian","medium","With roti"],
["Kurkuri Bhindi","North Indian","quick","With roti, or as a side to dal-rice"],
["Bhindi Do Pyaza","Punjabi","quick","With roti"],
["Bhare Baingan (Stuffed Brinjal)","Punjabi/UP","medium","With roti"],
["Aloo Baingan","Punjabi","quick","With roti"],
["Baingan Masala","Punjabi","medium","With roti or rice"],
["Aloo Jeera","Punjabi","quick","With roti, puri or dal-chawal"],
["Aloo Tamatar Rasedar","North Indian","quick","With roti, puri or rice"],
["Dum Aloo","Punjabi","medium","With roti or puri","D"],
["Kashmiri Dum Aloo","Kashmiri","medium","With rice or roti","D"],
["Aloo Shimla Mirch","Pan-India","quick","With roti"],
["Aloo Methi","Punjabi","quick","With roti"],
["Aloo Palak","Punjabi","quick","With roti"],
["Aloo Pyaaz ki Sabzi","Pan-India","quick","With roti or paratha"],
["Aloo Gobi Matar","Punjabi","quick","With roti"],
["Gobi Matar","Punjabi","quick","With roti"],
["Patta Gobi (Cabbage) Sabzi","Pan-India","quick","With roti"],
["Shalgam Sabzi (Turnip)","Punjabi","medium","With roti — a winter classic"],
["Arbi Masala (Colocasia)","UP/Punjabi","medium","With roti or puri"],
["Sem ki Phali Sabzi (Broad Beans)","UP/Punjabi","quick","With roti"],
["Gwar Phali Sabzi (Cluster Beans)","Rajasthani/Haryanvi","quick","With roti"],
["Beans Aloo","Pan-India","quick","With roti"],
["Parwal Sabzi (Pointed Gourd)","Bihari/UP","quick","With roti"],
["Bhare Parwal (Stuffed Pointed Gourd)","Bihari/UP","medium","With roti or rice"],
["Kundru (Tindora) Sabzi","UP/Bihari","quick","With roti"],
["Kaddu ki Sabzi (Khatta-Meetha)","Punjabi/UP","quick","With puri or roti"],
["Bharwa Tinda (Stuffed Tinda)","Punjabi","medium","With roti"],
["Kachche Kele ki Sabzi (Raw Banana)","Pan-India","quick","With roti"],
["Kathal ki Sabzi (Raw Jackfruit)","UP/Bihari","elaborate","With roti or rice","D"],
["Mooli ki Sabzi","Punjabi","quick","With roti"],
["Gajar Methi Sabzi","Punjabi","quick","With roti"],
["Chaulai (Amaranth) Sabzi","North Indian","quick","With roti"],
["Suran (Yam) ki Sabzi","North Indian","medium","With roti or rice"],
["Tamatar ki Sabzi","North Indian","quick","With roti or paratha"],
["Chukandar (Beetroot) Sabzi","North Indian","quick","With roti"],
["Palak Bhaji (Sookhi Palak)","North Indian","quick","With roti"],
["Methi ki Sookhi Sabzi","North Indian","quick","With roti"],
["Tori Chana Dal","Punjabi/UP","medium","With roti or rice"],
["Matar Mushroom","Punjabi","medium","With roti","D"],
["Mushroom Masala","North Indian","medium","With roti","D"],
["Hari Matar Nimona","UP","medium","With rice or roti"],
["Soya Keema Matar","Punjabi","medium","With roti or pav","D"],
["Lauki Kofta Curry","North Indian","elaborate","With roti or rice","D"],
["Aloo Wadi (Punjabi Wadiyan)","Punjabi","medium","With roti or rice"],
["Besan Masala","Rajasthani/Punjabi","quick","With roti — great when the fridge is empty"],
// ---- Rajasthani ----
["Gatte ki Sabzi","Rajasthani","medium","With roti or rice"],
["Ker Sangri","Rajasthani","medium","With bajra roti or phulka"],
["Papad ki Sabzi","Rajasthani","quick","With roti"],
["Mangodi ki Sabzi","Rajasthani","quick","With roti"],
["Dal Baati Churma","Rajasthani","elaborate","Baati with dal, ghee and churma","D"],
["Bajra Khichdi","Haryanvi/Rajasthani","medium","With ghee, kadhi or curd"],
// ---- Gujarati ----
["Sev Tamatar Sabzi","Gujarati","quick","With roti or bhakri"],
["Ringna Batata Nu Shaak","Gujarati","quick","With roti"],
["Gujarati Kadhi","Gujarati","quick","With rice or khichdi"],
["Gujarati Dal","Gujarati","quick","With rice"],
// ---- Maharashtrian ----
["Bharli Vangi (Stuffed Brinjal)","Maharashtrian","medium","With bhakri or roti"],
["Matki Usal","Maharashtrian","medium","With roti or pav"],
["Batata Bhaji","Maharashtrian","quick","With puri or roti"],
["Amti Dal","Maharashtrian","quick","With rice"],
["Pav Bhaji","Maharashtrian","medium","With buttered pav","D"],
// ---- Bengali / East ----
["Dhokar Dalna","Bengali","elaborate","With rice or roti","D"],
["Lau Ghonto","Bengali","quick","With rice"],
["Potol Aloo Jhol","Bengali","quick","With rice"],
["Begun Bhaja","Bengali","quick","With dal-rice"],
["Litti Chokha","Bihari","elaborate","Litti with baingan-aloo chokha and ghee","D"],
["Dalma","Odia","medium","With rice"],
// ---- South Indian ----
["Beans Poriyal","South Indian","quick","With sambar or rasam rice"],
["Cabbage Poriyal","South Indian","quick","With rice"],
["Urulai (Potato) Poriyal","South Indian","quick","With rice"],
["Kootu","South Indian","medium","With rice"],
["Mor Kuzhambu","South Indian","medium","With rice"],
["Vatha Kuzhambu","South Indian","medium","With rice"],
["Tomato Pappu","South Indian","quick","With rice and ghee"],
["Keerai Masiyal (Spinach)","South Indian","quick","With rice"],
["Kerala Thoran","Kerala","quick","With rice"],
["Parippu Curry","Kerala","quick","With rice and papad"],
["Kadala Curry","Kerala","medium","With rice or puttu"],
["Lemon Rice","South Indian","quick","With papad or curd"],
["Curd Rice","South Indian","quick","With pickle"],
["Tomato Rice","South Indian","quick","With raita or papad"],
["Bisi Bele Bath","Karnataka","medium","With boondi and papad"],
// ---- Hills, Kashmir, Sindh ----
["Nadru Yakhni (Lotus Stem)","Kashmiri","elaborate","With rice","D"],
["Haak (Kashmiri Greens)","Kashmiri","quick","With rice"],
["Chana Madra","Himachali","medium","With rice"],
["Sepu Vadi","Himachali","medium","With rice"],
["Kaddu ka Khatta","Himachali","quick","With rice or roti"],
["Aloo ke Gutke","Uttarakhandi","quick","With roti or puri"],
["Bhatt ki Churkani","Uttarakhandi","medium","With rice"],
["Gahat (Kulthi) ki Dal","Uttarakhandi","medium","With rice"],
["Sindhi Kadhi","Sindhi","medium","With rice"],
["Sai Bhaji","Sindhi","medium","With rice or roti"],
// ---- Dals ----
["Dal Fry","Pan-India","quick","With rice or roti"],
["Masoor Dal","Pan-India","quick","With rice or roti"],
["Dhuli Urad Dal","Punjabi","medium","With rice or roti"],
["Sabut Moong Dal","Punjabi","medium","With rice or roti"],
["Chana Dal Tadka","Pan-India","medium","With rice or roti"],
["Dal Palak","Pan-India","quick","With rice or roti"],
["Tomato Dal","Pan-India","quick","With rice"],
["Panchmel Dal","Rajasthani","medium","With rice or baati"],
["Maa ki Dal (Kaali Dal)","Punjabi","medium","With rice or roti"],
["Lasooni Dal Tadka","Punjabi","quick","With rice or roti"],
["Mixed Dal","Pan-India","medium","With rice or roti"],
// ---- Legumes / chana / matar ----
["Kala Chana Curry","Punjabi/UP","medium","With rice or roti"],
["Sookha Kala Chana","UP/Punjabi","medium","With puri or roti"],
["Hara Chana Masala","North Indian","medium","With roti"],
["Safed Matar Curry","North Indian","medium","With rice or kulcha"],
["Sprouts Curry","Pan-India","quick","With roti or rice"],
// ---- Paneer (home-style) ----
["Shahi Paneer","Punjabi","medium","With roti or naan","D"],
["Paneer Do Pyaza","Punjabi","quick","With roti","D"],
["Paneer Jalfrezi","North Indian","quick","With roti","D"],
["Paneer Lababdar","Punjabi","medium","With roti","D"],
["Paneer Masala (Home-Style)","North Indian","quick","With roti or rice"],
// ---- One-pot rice / khichdi ----
["Jeera Rice","Pan-India","quick","With dal, rajma or kadhi"],
["Matar Pulao","North Indian","quick","With raita"],
["Vegetable Pulao","North Indian","medium","With raita"],
["Tehri","UP","medium","With raita or pickle"],
["Veg Biryani","Pan-India","elaborate","With raita","D"],
["Dal Khichdi","Pan-India","quick","With ghee, papad, curd or pickle"],
["Palak Khichdi","Pan-India","quick","With curd and ghee"],
["Vegetable Daliya","Pan-India","quick","Light one-bowl meal, with curd"]
];
const seen=new Set(DB.map(d=>d.name.toLowerCase()));
X.forEach((r,i)=>{
  if(seen.has(r[0].toLowerCase())) return;
  const id="x"+String(i+1).padStart(3,"0");
  const meals=r[4]==="D"?["dinner"]:r[4]==="L"?["lunch"]:["lunch","dinner"];
  const it={id,name:r[0],cuisine:r[1],time:r[2],serve:r[3],meals};
  DB.push(it); byId[id]=it;
});
populateManualSelect();
})();
