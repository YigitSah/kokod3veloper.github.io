---
layout: post
title: Requestjava Kullanımı
---

Bu yazıda Requestjava Fonksiyonunu nasıl kullanacağınızı göstereceğim

![resim](https://user-images.githubusercontent.com/63654629/139591057-fe7010b8-7508-4cf2-a8f3-28eaa2774525.png)
			
        

        			
        

        //Only put this script on your code
    	public static String request(String types, String link, String[] headers ,String postdata) throws Exception {
    	String inputLine = "";
    	if (types == "get") {
        URL yahoo = new URL(link);
        URLConnection yc = yahoo.openConnection();
        for (int i = 0; i < headers.length; i++) {
        	  //System.out.println(headers[i]);
        	String[] isimvs = headers[i].split(":");
        	yc.setRequestProperty(isimvs[0],isimvs[1]);
        	}
        BufferedReader in = new BufferedReader(
                                new InputStreamReader(
                                yc.getInputStream()));
        

        while ((inputLine = in.readLine()) != null) 
            System.out.println(inputLine);
        in.close();
       
        return inputLine;
    	}else if (types =="post") {
    		 URL url = new URL(link);
    	        URLConnection conn;
    	        conn = url.openConnection();
    	        for (int i = 0; i < headers.length; i++) {
    	        	  //System.out.println(headers[i]);
    	        	String[] isimvs = headers[i].split(":");
    	        	conn.setRequestProperty(isimvs[0],isimvs[1]);
    	        	}
    	        String data = postdata;
    	        conn.setDoOutput(true);
    	        conn.setDoInput(true);
    	        OutputStreamWriter wr = new OutputStreamWriter(conn.getOutputStream());
    	        wr.write(data);
    	        wr.flush();
    	        BufferedReader rd = new BufferedReader(new InputStreamReader(conn.getInputStream())); 
    	        while ((inputLine = rd.readLine()) != null) 
    	            System.out.println(inputLine);
    	}
		return inputLine;
    }
    
# types Değişkeni:
<li>Tip belirtir.</li>
<li>"post" veya "get" değeri alır.</li>


# link Değişkeni:
<li> Istek atılacak olan linktir.</li>
<li> String alır.</li>


# header Değişkeni:
<li> String[] alır.</li>
<li> Siteye atılan header'dır.</li>


# postdata Değişkeni:
<li> Sadece types post iken çalışır.</li>
<li> Post data'yı belirler.</li>

# Teşekkür:
Ilk yazımı okuduğunuz için teşekkür ederim. Bir sorununuz varsa hakkında bölümündeki linklerden bana ulaşabilirsiniz.
