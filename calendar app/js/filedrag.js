(function() {

	function $id(id) {
		return document.getElementById(id);
	}

	function Output(msg) {
		var m = $id("messages");
		m.innerHTML += msg;
	}

	function Callicalendar(text) {
		
		icalParser.parseIcal(text);

		//icalParser.ical is now set
		icalParser.ical.version; 
		icalParser.ical.prodid;
		
		//A DEPLACER DANS FORMICSDATA lorsque la fonction sera impl�ment�e
		var startDate;
		var startTime;
		var endDate;
		var endTime;
		var location;
		var title;
		var description;
		//le calendarId sera d�fini par la fonction persistEvent
		

		
	 for(var key in icalParser.ical.events)
	 {
		//EQUIVALENT DU TRAITEMENT QUE DEVRA REALISER ICSFORMDATA
		//A DEPLACER LORSQUE LA FONCTION ICSFORMDATA SERA CREEE

		 
		 //si les attributs ne sont pas renseign�s dans l'ICS event
		 //si non pr�sent, la valeur initiale reste inchang�e : ''	 
	   if (icalParser.ical.events[key].dtstart==null || icalParser.ical.events[key]=== undefined || icalParser.ical.events[key].dtstart=== undefined)  console.log("description  null/undefined" );
 		else console.log("DSTART VALUE : " +icalParser.ical.events[key].dtstart['value']);

  	    if (icalParser.ical.events[key].dtstamp==null || icalParser.ical.events[key]=== undefined || icalParser.ical.events[key].dtstamp=== undefined)  console.log("description  null/undefined" );
		else console.log("DSTAMP VALUE : " +icalParser.ical.events[key].dtstamp['value']);
  	    
		if (icalParser.ical.events[key].dtend==null || icalParser.ical.events[key]=== undefined || icalParser.ical.events[key].dtend=== undefined)  console.log("description  null/undefined" );
		else console.log("DTEND VALUE : " +icalParser.ical.events[key].dtend['value']);

		if (icalParser.ical.events[key].uid==null || icalParser.ical.events[key]=== undefined || icalParser.ical.events[key].uid=== undefined)  console.log("description  null/undefined" );
		else console.log("UID VALUE : " +icalParser.ical.events[key].uid['value']);

		if (icalParser.ical.events[key].description==null || icalParser.ical.events[key]=== undefined || icalParser.ical.events[key].description=== undefined)  console.log("description  null/undefined" );
		else console.log("Descritpion VALUE : " +icalParser.ical.events[key].description['value']);

		if (icalParser.ical.events[key].location==null || icalParser.ical.events[key]=== undefined || icalParser.ical.events[key].location=== undefined)  console.log("location null/undefined" );
		else console.log("location VALUE : " +icalParser.ical.events[key].location['value']);

		if (icalParser.ical.events[key].summary==null || icalParser.ical.events[key]=== undefined || icalParser.ical.events[key].summary=== undefined)  console.log("summary  null/undefined" );
		else console.log("summary VALUE : " +icalParser.ical.events[key].summary['value']);

		if (icalParser.ical.events[key].trigger==null || icalParser.ical.events[key]=== undefined || icalParser.ical.events[key].trigger=== undefined)  console.log("trigger  null/undefined" );
		else console.log("Trigger VALUE : " +icalParser.ical.events[key].trigger['value']);

		if (icalParser.ical.events[key].action==null || icalParser.ical.events[key]=== undefined || icalParser.ical.events[key].action=== undefined)  console.log("action  null/undefined" );
		else console.log("Action VALUE : " +icalParser.ical.events[key].action['value']);

	 }	
	}


	// file drag hover
	function FileDragHover(e) {
		e.stopPropagation();
		e.preventDefault();
		e.target.className = (e.type == "dragover" ? "hover" : "");
		
	}


	// file selection
	function FileSelectHandler(e) {

		// cancel event and hover styling
		FileDragHover(e);

		// fetch FileList object
		var files = e.target.files || e.dataTransfer.files;

		// process all File objects
		for (var i = 0, f; f = files[i]; i++) {
			getCalendar(f);
		}

	}

	function getCalendar(file)
	{
	var ext = file.name.split(".").pop().toLowerCase();
	var selectedFile = file;
	var reader = new FileReader();
    reader.readAsText(selectedFile);
	 console.log("ok 1");
	reader.onload = function() {
	   var  doc = reader.result;
	  // console.log(doc);
		Callicalendar(doc);
		Output("<p><strong>" + file.name + "</strong>");
	};
	}
	
	// initialize
	function Init() {
var encodedData= "QkVHSU46VkNBTEVOREFSDQpQUk9ESUQ6LS8vTWljcm9zb2Z0IENvcnBvcmF0aW9uLy9PdXRsb29rIDE0LjAgTUlNRURJUi8vRU4NClZFUlNJT046Mi4wDQpNRVRIT0Q6UFVCTElTSA0KWC1DQUxTVEFSVDoyMDE0MDQyNVQwODMwMDBaDQpYLUNBTEVORDoyMDE0MDUyM1QxMjAwMDBaDQpYLUNMSVBTVEFSVDoyMDE0MDQyM1QyMjAwMDBaDQpYLUNMSVBFTkQ6MjAxNDA1MjNUMjIwMDAwWg0KWC1XUi1SRUxDQUxJRDp7MDAwMDAwMkUtOEJFNC01MkVGLTcxNUUtMkJCRDAxNTM5MkQzfQ0KWC1XUi1DQUxOQU1FOkxBVkFCUkUgQ2zDqW1lbnQgT0YvRFNJRg0KWC1QUklNQVJZLUNBTEVOREFSOlRSVUUNClgtT1dORVI7Q049IkxBVkFCUkUgQ2zDqW1lbnQgT0YvRFNJRiI6bWFpbHRvOmNsZW1lbnQubGF2YWJyZUBvcmFuZ2UuY29tDQpYLU1TLU9MSy1XS0hSU1RBUlQ7VFpJRD0iUm9tYW5jZSBTdGFuZGFyZCBUaW1lIjowODAwMDANClgtTVMtT0xLLVdLSFJFTkQ7VFpJRD0iUm9tYW5jZSBTdGFuZGFyZCBUaW1lIjoxNzAwMDANClgtTVMtT0xLLVdLSFJEQVlTOk1PLFRVLFdFLFRILEZSDQpCRUdJTjpWVElNRVpPTkUNClRaSUQ6Um9tYW5jZSBTdGFuZGFyZCBUaW1lDQpCRUdJTjpTVEFOREFSRA0KRFRTVEFSVDoxNjAxMTAyOFQwMzAwMDANClJSVUxFOkZSRVE9WUVBUkxZO0JZREFZPS0xU1U7QllNT05USD0xMA0KVFpPRkZTRVRGUk9NOiswMjAwDQpUWk9GRlNFVFRPOiswMTAwDQpFTkQ6U1RBTkRBUkQNCkJFR0lOOkRBWUxJR0hUDQpEVFNUQVJUOjE2MDEwMzI1VDAyMDAwMA0KUlJVTEU6RlJFUT1ZRUFSTFk7QllEQVk9LTFTVTtCWU1PTlRIPTMNClRaT0ZGU0VURlJPTTorMDEwMA0KVFpPRkZTRVRUTzorMDIwMA0KRU5EOkRBWUxJR0hUDQpFTkQ6VlRJTUVaT05FDQpCRUdJTjpWRVZFTlQNCkFUVEVOREVFO0NOPSJCRVVaT04gU29sZW5lIE9GL0RTSUYiO1JTVlA9VFJVRTtQQVJUU1RBVD1URU5UQVRJVkU6bWFpbHRvOnNvbA0KCWVuZS5iZXV6b25Ab3JhbmdlLmNvbQ0KQVRURU5ERUU7Q049IkZFTkFZUk9VIEFubmUgRXh0IE9GL0RTSUYiO1JTVlA9VFJVRTptYWlsdG86YWZlbmF5cm91LmV4dEBvcmFuDQoJZ2UuY29tDQpBVFRFTkRFRTtDTj0iVkFOU09OIE9saXZpZXIgRXh0IE9GL0RTSUYiO1JTVlA9VFJVRTptYWlsdG86b3ZhbnNvbi5leHRAb3JhbmcNCgllLmNvbQ0KQVRURU5ERUU7Q049IlRPRE9ST1ZBIEFuYSBPRi9EU0lGIjtSU1ZQPVRSVUU6bWFpbHRvOmFuYS50b2Rvcm92YUBvcmFuZ2UuY29tDQpBVFRFTkRFRTtDTj0iQlJBTkRUIEFsZXhpcyBPRi9EU0lGIjtSU1ZQPVRSVUU6bWFpbHRvOmFsZXhpcy5icmFuZHRAb3JhbmdlLmMNCglvbQ0KQVRURU5ERUU7Q049IkdVSUxMRU1BUkQgTGF1cmVudCBPRi9EU0lGIjtSU1ZQPVRSVUU6bWFpbHRvOmxhdXJlbnQuZ3VpbGxlbWFyDQoJZEBvcmFuZ2UuY29tDQpBVFRFTkRFRTtDTj0iQlJFVEVBVVggTGlvbmVsIE9GL0RTSUYiO1JTVlA9VFJVRTtQQVJUU1RBVD1URU5UQVRJVkU6bWFpbHRvOmwNCglpb25lbDEuYnJldGVhdXhAb3JhbmdlLmNvbQ0KQVRURU5ERUU7Q049IktIT1VQSE9OR1NZIEFsZXhhbmRyZSBFeHQgT0YvRFNJRiI7UlNWUD1UUlVFO1BBUlRTVEFUPUFDQ0VQVEVEDQoJOm1haWx0bzpha2hvdXBob25nc3kuZXh0QG9yYW5nZS5jb20NCkFUVEVOREVFO0NOPSJaT1JEQU4gUGhpbGlwcGUgT0YvRFNJRiI7UlNWUD1UUlVFOm1haWx0bzpwaGlsaXBwZS56b3JkYW5Ab3Jhbg0KCWdlLmNvbQ0KQVRURU5ERUU7Q049IkxFIEJBTlNBSVMgTWFyYyBPRi9EU0lGIjtSU1ZQPVRSVUU7UEFSVFNUQVQ9VEVOVEFUSVZFOm1haWx0bzptDQoJYXJjLmxlYmFuc2Fpc0BvcmFuZ2UuY29tDQpBVFRFTkRFRTtDTj0iQUxHRVIgR3LDqWdvcnkgT0YvRFNJRiI7UlNWUD1UUlVFOm1haWx0bzpncmVnb3J5LmFsZ2VyQG9yYW5nZS4NCgljb20NCkFUVEVOREVFO0NOPSJaQUhSQU1BTkUgSGFzc2FuIE9GL0RTSUYiO1JTVlA9VFJVRTptYWlsdG86aGFzc2FuLnphaHJhbWFuZUBvcg0KCWFuZ2UuY29tDQpBVFRFTkRFRTtDTj0iQkVMT1VCQUQgTXlyaWFtIEV4dCBPRi9EU0lGIjtSU1ZQPVRSVUU7UEFSVFNUQVQ9VEVOVEFUSVZFOm1haWwNCgl0bzptYmVsb3ViYWQuZXh0QG9yYW5nZS5jb20NCkFUVEVOREVFO0NOPSJQT0lST1QgSmVhbiBEYXZpZCBPRi9EU0lGIjtSU1ZQPVRSVUU7UEFSVFNUQVQ9QUNDRVBURUQ6bWFpbHRvOg0KCWplYW5kYXZpZC5wb2lyb3RAb3JhbmdlLmNvbQ0KQ0xBU1M6UFVCTElDDQpDUkVBVEVEOjIwMTQwMzE5VDEzMjcyMVoNCkRFU0NSSVBUSU9OOiBuDQpEVEVORDtUWklEPSJSb21hbmNlIFN0YW5kYXJkIFRpbWUiOjIwMTQwNDI1VDE0MDAwMA0KRFRTVEFNUDoyMDE0MDMxOVQxMzUwNDhaDQpEVFNUQVJUO1RaSUQ9IlJvbWFuY2UgU3RhbmRhcmQgVGltZSI6MjAxNDA0MjVUMTIzMDAwDQpMQVNULU1PRElGSUVEOjIwMTQwNDE3VDEzNTQzNFoNCkxPQ0FUSU9OOnNhbGxlIGRlIHLDqXUNCk9SR0FOSVpFUjtDTj0iTEFWQUJSRSBDbMOpbWVudCBPRi9EU0lGIjptYWlsdG86Y2xlbWVudC5sYXZhYnJlQG9yYW5nZS5jb20NClBSSU9SSVRZOjUNClJSVUxFOkZSRVE9V0VFS0xZO0NPVU5UPTU7QllEQVk9RlINClNFUVVFTkNFOjANClNVTU1BUlk7TEFOR1VBR0U9ZnI6QnJlYWsgamV1eCAtIGNpdGFkZWxsZSwgRWxpeGlyIC4uLiANClRSQU5TUDpPUEFRVUUNClVJRDowNDAwMDAwMDgyMDBFMDAwNzRDNUI3MTAxQTgyRTAwODAwMDAwMDAwQjAyODMzMjg4MDQzQ0YwMTAwMDAwMDAwMDAwMDAwMA0KCTAxMDAwMDAwMEJCNUI5OThFM0ZFRjU4NEM4NkMyODEyNTUxMUM4MDFGDQpYLUFMVC1ERVNDO0ZNVFRZUEU9dGV4dC9odG1sOjwhRE9DVFlQRSBIVE1MIFBVQkxJQyAiLS8vVzNDLy9EVEQgSFRNTCAzLjIvL0UNCglOIj5uPEhUTUw+bjxIRUFEPm48TUVUQSBOQU1FPSJHZW5lcmF0b3IiIENPTlRFTlQ9Ik1TIEV4Y2hhbmdlIFNlcnZlciB2ZQ0KCXJzaW9uIDE0LjAyLjUwMDQuMDAwIj5uPFRJVExFPjwvVElUTEU+bjwvSEVBRD5uPEJPRFk+bjwhLS0gQ29udmVydGVkIGYNCglyb20gdGV4dC9ydGYgZm9ybWF0IC0tPm5uPFAgRElSPUxUUj48U1BBTiBMQU5HPSJmciI+PC9TUEFOPjxTUEFOIExBTkc9ImYNCglyIj48L1NQQU4+PFNQQU4gTEFORz0iZnIiPjxGT05UIFNJWkU9MiBGQUNFPSJBcmlhbCI+PC9GT05UPjwvU1BBTj48U1BBTiBMQQ0KCU5HPSJmciI+PC9TUEFOPjxTUEFOIExBTkc9ImZyIj48L1NQQU4+PFNQQU4gTEFORz0iZnIiPiZuYnNwOzwvU1BBTj48L1A+bg0KCW48L0JPRFk+bjwvSFRNTD4NClgtTUlDUk9TT0ZULUNETy1CVVNZU1RBVFVTOkJVU1kNClgtTUlDUk9TT0ZULUNETy1JTVBPUlRBTkNFOjENClgtTUlDUk9TT0ZULURJU0FMTE9XLUNPVU5URVI6RkFMU0UNClgtTVMtT0xLLUFQUFRMQVNUU0VRVUVOQ0U6Mg0KWC1NUy1PTEstQVBQVFNFUVRJTUU6MjAxNDAzMTlUMTM1MDQ4Wg0KWC1NUy1PTEstQVVUT0ZJTExMT0NBVElPTjpGQUxTRQ0KWC1NUy1PTEstQ09ORlRZUEU6MA0KQkVHSU46VkFMQVJNDQpUUklHR0VSOi1QVDE1TQ0KQUNUSU9OOkRJU1BMQVkNCkRFU0NSSVBUSU9OOlJlbWluZGVyDQpFTkQ6VkFMQVJNDQpFTkQ6VkVWRU5UDQpCRUdJTjpWRVZFTlQNCkNMQVNTOlBVQkxJQw0KQ1JFQVRFRDoyMDE0MDQxN1QxMzU0MzRaDQpEVEVORDoyMDE0MDQyNVQxMjAwMDBaDQpEVFNUQU1QOjIwMTQwNDI0VDE2MzEyOFoNCkRUU1RBUlQ6MjAxNDA0MjVUMTAzMDAwWg0KTEFTVC1NT0RJRklFRDoyMDE0MDQxOFQwNzM1NTBaDQpQUklPUklUWTo1DQpSRUNVUlJFTkNFLUlEOjIwMTQwNDI1VDEwMzAwMFoNClNFUVVFTkNFOjANClVJRDowNDAwMDAwMDgyMDBFMDAwNzRDNUI3MTAxQTgyRTAwODAwMDAwMDAwQjAyODMzMjg4MDQzQ0YwMTAwMDAwMDAwMDAwMDAwMA0KCTAxMDAwMDAwMEJCNUI5OThFM0ZFRjU4NEM4NkMyODEyNTUxMUM4MDFGDQpYLU1JQ1JPU09GVC1DRE8tSU1QT1JUQU5DRToxDQpCRUdJTjpWQUxBUk0NClRSSUdHRVI6LVBUMTVNDQpBQ1RJT046RElTUExBWQ0KREVTQ1JJUFRJT046UmVtaW5kZXINCkVORDpWQUxBUk0NCkVORDpWRVZFTlQNCkJFR0lOOlZFVkVOVA0KQVRURU5ERUU7Q049IkZFTkFZUk9VIEFubmUgRXh0IE9GL0RTSUYiO1JTVlA9VFJVRTptYWlsdG86YWZlbmF5cm91LmV4dEBvcmFuDQoJZ2UuY29tDQpBVFRFTkRFRTtDTj0iTEFWQUJSRSBDbMOpbWVudCBPRi9EU0lGIjtSU1ZQPVRSVUU6bWFpbHRvOmNsZW1lbnQubGF2YWJyZUBvcmENCgluZ2UuY29tDQpBVFRFTkRFRTtDTj1jaHJpc3RvcGhlLmNvbWJldEBncmVlbi1jb25zZWlsLmNvbTtSU1ZQPVRSVUU6bWFpbHRvOmNocmlzdG9waGUNCgkuY29tYmV0QGdyZWVuLWNvbnNlaWwuY29tDQpBVFRFTkRFRTtDTj1vbGl2aWVyLnZhbnNvbkBncmVlbi1jb25zZWlsLmNvbTtSU1ZQPVRSVUU6bWFpbHRvOm9saXZpZXIudmFuc28NCgluQGdyZWVuLWNvbnNlaWwuY29tDQpBVFRFTkRFRTtDTj1nZW9yZ2VzLnJvY2NvQGdyZWVuLWNvbnNlaWwuY29tO1JTVlA9VFJVRTptYWlsdG86Z2Vvcmdlcy5yb2Njb0ANCglncmVlbi1jb25zZWlsLmNvbQ0KQ0xBU1M6UFVCTElDDQpDUkVBVEVEOjIwMTQwNDE3VDE0MDA0NFoNCkRFU0NSSVBUSU9OOlF1YW5kIDogbHVuZGkgMjggYXZyaWwgMjAxNCAxMDowMC0xMTowMCAoVVRDKzAxOjAwKSBCcnV4ZWxsZXMsDQoJIENvcGVuaGFndWUsIE1hZHJpZCwgUGFyaXMubkVtcGxhY2VtZW50IDogw6AgZMOpZmluaXJublJlbWFycXVlIDogbGUgDQoJZMOpY2FsYWdlIEdNVCBjaS1kZXNzdXMgbmUgdGllbnQgcGFzIGNvbXB0ZSBkZXMgcsOpZ2xhZ2VzIGRlIGwnaGV1cmUgZCfDqXQNCgnDqS5ubip+Kn4qfip+Kn4qfip+Kn4qfipubkJvbmpvdXIsbm5NZXJjaSDDoCB0b3VzIGRlIHZvdXMgcmVuZHJlIGRpDQoJc3BvbmlibGUgc3VyIGNlIGNyw6luZWF1IHBvdXIgcXVlIG5vdXMgcHVpc3Npb25zIGVuc2VtYmxlIHZhbGlkZXIgbGVzIMOpbA0KCcOpbWVudHMgZHUgYnJpZWYgcG91ciBsZSBUQSBkdSAyMi8wNS5ubkNkbHQsbm5MdXhpc2xlIFNpZXdlIFRvbGFuQ2hlDQoJZiBkZSBQcm9qZXQgV2Vibk9yYW5nZSA8aHR0cDovL29uZS1kaXJlY3Rvcnkuc3NvLmZyYW5jZXRlbGVjb20uZnIvYW5udWFpcg0KCWUvZW50aXRlLmRvP2FjdGlvbj1WaWV3JnVpZD0lMjMlMDAlN0UlMEYlMDREJTBBJTA3cSUxMC0lMUQlMTklMUMlMEMlMTclM0ZZDQoJJTI3JTBBTSUwMSUwQiUwNiUzRSUxNC0lMDclMDUlMDklMEMlMDAlMjlZJTI3JTBBTSUwRSUxNyUxMyUyMiUxNiUyNiUxRCUxNSUNCgkwNCUwMCUxMSUyMyUxOG8lMEQlMTNVJTAzJTAwPiAvIE9GIDxodHRwOi8vb25lLWRpcmVjdG9yeS5zc28uZnJhbmNldGVsZWNvbQ0KCS5mci9hbm51YWlyZS9lbnRpdGUuZG8/YWN0aW9uPVZpZXcmdWlkPSUyMyUwMCU3RSUwNiUxNkQlMEElMDdxJTEzN0UlMUYlMURYDQoJJTE3JTIyJTAxKiUxRCUxOSUwRCUxNiU1RSUyOCUxNiU3RSUwMCUxRSUxQyUxNyUxMyUyMiUxQjYlMDglMTklMUElMDAlNUUlMjgNCgklMTYlN0UlMEYlMDIlMDklMEIlMTElMjklMDElMjYlMDUlMTUlMEIlMEElMUYlNjAlMTErVCUxNiUxQT4gLyBEUkNHUCA8aHR0cA0KCTovL29uZS1kaXJlY3Rvcnkuc3NvLmZyYW5jZXRlbGVjb20uZnIvYW5udWFpcmUvZW50aXRlLmRvP2FjdGlvbj1WaWV3JnVpZD0lDQoJMjMlMDAlN0UlMEQlMDIlMEIlMDIlMDIlNjAlMUE2VCUxRiUwRUklMUQ5SCUyNSUxRCU1QyUwNyUxME8lMjklMUI3JTAwJTA0JTANCgkxJTAwJTAxJTYwJTExK1QlMTklMDYlMTElMDAtJTFCLSUxQyUxMSUwMSUxNyUxNyU2MCUxMStUJTE2JTFBJTA0JTFDJTJGJTEwNw0KCSUwQyUxQyUwRCUwNiUxRCUyMVklMjclMEFNJTBFJTE3PiAvIERDT0wgPGh0dHA6Ly9vbmUtZGlyZWN0b3J5LnNzby5mcmFuY2V0DQoJZWxlY29tLmZyL2FubnVhaXJlL2VudGl0ZS5kbz9hY3Rpb249VmlldyZ1aWQ9JTIzJTAwJTdFJTBEJTEzJTA3JTA5JTVFJTIzJTANCgkwJTdFJTBEJTAyJTBCJTAyJTAyJTYwJTFBNlQlMUYlMEVJJTFEOUglMjUlMUQlNUMlMDclMTBPJTI5JTFCNyUwMCUwNCUwMSUwMA0KCSUwMSU2MCUxMStUJTE5JTA2JTExJTAwLSUxQi0lMUMlMTElMDElMTclMTclNjAlMTErVCUxNiUxQSUwNCUxQyUyRiUxMDclMEMlDQoJMUMlMEQlMDYlMUQlMjFZJTI3JTBBTSUwRSUxNz4gLyBTRUxGQ0FSRSA8aHR0cDovL29uZS1kaXJlY3Rvcnkuc3NvLmZyYW5jZXQNCgllbGVjb20uZnIvYW5udWFpcmUvZW50aXRlLmRvP2FjdGlvbj1WaWV3JnVpZD0lMjMlMDAlN0UlMUElMTUlMDQlMDMlMTEtJTA3JQ0KCTI2RSUxRiUxRFglMTYlMkYlMUElMkZFJTFGJTFEWCUxNiUzRSUxNiUyNCUxOSU1QyUwNyUxME8lMjMlMTNvJTA2JTA1VSUwMyUwDQoJNiU2MCUxQTZUJTE1JTA2JTExJTFCOCUxQyUyNiUxQSU1QyUwQyUwNk8lMjUlMUI3JTFCJTExJTA2JTBCJTA3LSUxQzElMEMlNUMNCgklMEMlMDZPKiUwNyUyMiUwNyUxMyUwRCUxMSUxNyslMTArJTA2JTFERCUwMSUxMXElMTMxPiAgbjAxIDU3IDM2IDAxIDcwbjANCgk3IDg5IDUxIDgxIDYxbmx1eGlzbGUuc2lld2V0b2xhQG9yYW5nZS5jb21ubm5ubm4NCkRURU5EO1RaSUQ9IlJvbWFuY2UgU3RhbmRhcmQgVGltZSI6MjAxNDA0MjhUMTEwMDAwDQpEVFNUQU1QOjIwMTQwNDE3VDE0MDA0MFoNCkRUU1RBUlQ7VFpJRD0iUm9tYW5jZSBTdGFuZGFyZCBUaW1lIjoyMDE0MDQyOFQxMDAwMDANCkxBU1QtTU9ESUZJRUQ6MjAxNDA0MTdUMTQwMDQ0Wg0KTE9DQVRJT046w6AgZMOpZmluaXINCk9SR0FOSVpFUjtDTj0iU0lFV0UgVE9MQSBMdXhpc2xlIE9GL0RSQ0dQIjptYWlsdG86bHV4aXNsZS5zaWV3ZXRvbGFAb3JhbmdlLg0KCWNvbQ0KUFJJT1JJVFk6NQ0KU0VRVUVOQ0U6MA0KU1VNTUFSWTtMQU5HVUFHRT1mcjpWYWxpZGF0aW9uIGR1IGJyaWVmIFRBIGR1IDIyIG1haQ0KVFJBTlNQOk9QQVFVRQ0KVUlEOjA0MDAwMDAwODIwMEUwMDA3NEM1QjcxMDFBODJFMDA4MDAwMDAwMDAzMDM0REQwQTU2NUFDRjAxMDAwMDAwMDAwMDAwMDAwDQoJMDEwMDAwMDAwREQ5NjUwRDlFRDAwQTI0N0I3QTVDMUQ4NDY2REQxNEYNClgtQUxULURFU0M7Rk1UVFlQRT10ZXh0L2h0bWw6PCFET0NUWVBFIEhUTUwgUFVCTElDICItLy9XM0MvL0RURCBIVE1MIDMuMi8vRQ0KCU4iPm48SFRNTD5uPEhFQUQ+bjxNRVRBIE5BTUU9IkdlbmVyYXRvciIgQ09OVEVOVD0iTVMgRXhjaGFuZ2UgU2VydmVyIHZlDQoJcnNpb24gMTQuMDIuNTAwNC4wMDAiPm48VElUTEU+PC9USVRMRT5uPC9IRUFEPm48Qk9EWT5uPCEtLSBDb252ZXJ0ZWQgZg0KCXJvbSB0ZXh0L3J0ZiBmb3JtYXQgLS0+bm48UCBESVI9TFRSPjxTUEFOIExBTkc9ImZyIj48Rk9OVCBGQUNFPSJDYWxpYnJpIg0KCT5RdWFuZCA6IGx1bmRpIDI4IGF2cmlsIDIwMTQgMTA6MDAtMTE6MDAgKFVUQyswMTowMCkgQnJ1eGVsbGVzLCBDb3BlbmhhZ3UNCgllLCBNYWRyaWQsIFBhcmlzLjwvRk9OVD48L1NQQU4+PC9QPm5uPFAgRElSPUxUUj48U1BBTiBMQU5HPSJmciI+PEZPTlQgDQoJRkFDRT0iQ2FsaWJyaSI+RW1wbGFjZW1lbnQgOiDDoCBkw6lmaW5pcjwvRk9OVD48L1NQQU4+PC9QPm5uPFAgRElSPUxUUj48DQoJU1BBTiBMQU5HPSJmciI+PEZPTlQgRkFDRT0iQ2FsaWJyaSI+UmVtYXJxdWUgOiBsZSBkw6ljYWxhZ2UgR01UIGNpLWRlc3N1cyANCgluZSB0aWVudCBwYXMgY29tcHRlIGRlcyByw6lnbGFnZXMgZGUgbCdoZXVyZSBkJ8OpdMOpLjwvRk9OVD48L1NQQU4+PC9QPm4NCgluPFAgRElSPUxUUj48U1BBTiBMQU5HPSJmciI+PEZPTlQgRkFDRT0iQ2FsaWJyaSI+Kn4qfip+Kn4qfip+Kn4qfip+KjwvRk9OVA0KCT48L1NQQU4+PC9QPm5uPFAgRElSPUxUUj48U1BBTiBMQU5HPSJmciI+PEZPTlQgRkFDRT0iQ2FsaWJyaSI+Qm9uam91ciw8DQoJL0ZPTlQ+PC9TUEFOPjwvUD5ubjxQIERJUj1MVFI+PFNQQU4gTEFORz0iZnIiPjxGT05UIEZBQ0U9IkNhbGlicmkiPk1lcmNpDQoJIMOgIHRvdXMgZGUgdm91cyByZW5kcmUgZGlzcG9uaWJsZSBzdXIgY2UgY3LDqW5lYXUgcG91ciBxdWUgbm91cyBwdWlzc2lvbnMNCgkgZW5zZW1ibGUgdmFsaWRlciBsZXMgw6lsw6ltZW50cyBkdSBicmllZiBwb3VyIGxlIFRBIGR1IDIyLzA1LjwvRk9OVD48L1NQQQ0KCU4+PFNQQU4gTEFORz0iZnIiPjwvU1BBTj48L1A+bm48UCBESVI9TFRSPjxTUEFOIExBTkc9ImZyIj48Qj48L0I+PC9TUEFOPg0KCTxCPjxTUEFOIExBTkc9ImZyLWZyIj48L1NQQU4+PC9CPjwvUD5ubjxQIERJUj1MVFI+PEI+PFNQQU4gTEFORz0iZnItZnIiPg0KCTxGT05UIENPTE9SPSIjMjYyNjI2IiBGQUNFPSJDYWxpYnJpIj5DZGx0LDwvRk9OVD48L1NQQU4+PC9CPjwvUD5ubjxQIERJDQoJUj1MVFI+PEI+PFNQQU4gTEFORz0iZnItZnIiPjxGT05UIENPTE9SPSIjMjYyNjI2IiBGQUNFPSJDYWxpYnJpIj5MdXhpc2xlIFMNCglpZXdlIFRvbGE8L0ZPTlQ+PC9TUEFOPjwvQj48L1A+bm48UCBESVI9TFRSPjxTUEFOIExBTkc9ImZyIj48L1NQQU4+PFNQQU4NCgkgTEFORz0iZnItZnIiPjxGT05UIENPTE9SPSIjMjYyNjI2IiBGQUNFPSJDYWxpYnJpIj5DaGVmIGRlIFByb2pldCBXZWI8L0ZPTg0KCVQ+PC9TUEFOPjwvUD5ubjxQIERJUj1MVFI+PFNQQU4gTEFORz0iZnIiPjwvU1BBTj48QSBIUkVGPSJodHRwOi8vb25lLWRpcg0KCWVjdG9yeS5zc28uZnJhbmNldGVsZWNvbS5mci9hbm51YWlyZS9lbnRpdGUuZG8/YWN0aW9uPVZpZXcmYW1wO3VpZD0lMjMlMDANCgklN0UlMEYlMDREJTBBJTA3cSUxMC0lMUQlMTklMUMlMEMlMTclM0ZZJTI3JTBBTSUwMSUwQiUwNiUzRSUxNC0lMDclMDUlMDklMA0KCUMlMDAlMjlZJTI3JTBBTSUwRSUxNyUxMyUyMiUxNiUyNiUxRCUxNSUwNCUwMCUxMSUyMyUxOG8lMEQlMTNVJTAzJTAwIj48U1BBDQoJTiBMQU5HPSJmciI+PC9TUEFOPjxTUEFOIExBTkc9ImZyIj48L1NQQU4+PFNQQU4gTEFORz0iZnItZnIiPjxGT05UIENPTE9SPSINCgkjMjYyNjI2IiBTSVpFPTIgRkFDRT0iQ2FsaWJyaSI+T3JhbmdlPC9GT05UPjwvU1BBTj48U1BBTiBMQU5HPSJmciI+PC9TUEFOPg0KCTwvQT48U1BBTiBMQU5HPSJmciI+PC9TUEFOPjxTUEFOIExBTkc9ImZyIj48L1NQQU4+PFNQQU4gTEFORz0iZnItZnIiPjxGT05UDQoJIENPTE9SPSIjMjYyNjI2IiBTSVpFPTIgRkFDRT0iQ2FsaWJyaSI+LzwvRk9OVD48L1NQQU4+PFNQQU4gTEFORz0iZnIiPiA8L1MNCglQQU4+PEEgSFJFRj0iaHR0cDovL29uZS1kaXJlY3Rvcnkuc3NvLmZyYW5jZXRlbGVjb20uZnIvYW5udWFpcmUvZW50aXRlLmRvPw0KCWFjdGlvbj1WaWV3JmFtcDt1aWQ9JTIzJTAwJTdFJTA2JTE2RCUwQSUwN3ElMTM3RSUxRiUxRFglMTclMjIlMDEqJTFEJTE5JTANCglEJTE2JTVFJTI4JTE2JTdFJTAwJTFFJTFDJTE3JTEzJTIyJTFCNiUwOCUxOSUxQSUwMCU1RSUyOCUxNiU3RSUwRiUwMiUwOSUwQg0KCSUxMSUyOSUwMSUyNiUwNSUxNSUwQiUwQSUxRiU2MCUxMStUJTE2JTFBIj48U1BBTiBMQU5HPSJmciI+PC9TUEFOPjxTUEFOIExBDQoJTkc9ImZyIj48L1NQQU4+PFNQQU4gTEFORz0iZnItZnIiPjxGT05UIENPTE9SPSIjMjYyNjI2IiBTSVpFPTIgRkFDRT0iQ2FsaWINCglyaSI+T0Y8L0ZPTlQ+PC9TUEFOPjxTUEFOIExBTkc9ImZyIj48L1NQQU4+PC9BPjxTUEFOIExBTkc9ImZyIj48L1NQQU4+PFNQQQ0KCU4gTEFORz0iZnIiPjwvU1BBTj48U1BBTiBMQU5HPSJmci1mciI+PEZPTlQgQ09MT1I9IiMyNjI2MjYiIFNJWkU9MiBGQUNFPSJDDQoJYWxpYnJpIj4vPC9GT05UPjwvU1BBTj48U1BBTiBMQU5HPSJmciI+IDwvU1BBTj48QSBIUkVGPSJodHRwOi8vb25lLWRpcmVjdG8NCglyeS5zc28uZnJhbmNldGVsZWNvbS5mci9hbm51YWlyZS9lbnRpdGUuZG8/YWN0aW9uPVZpZXcmYW1wO3VpZD0lMjMlMDAlN0UlDQoJMEQlMDIlMEIlMDIlMDIlNjAlMUE2VCUxRiUwRUklMUQ5SCUyNSUxRCU1QyUwNyUxME8lMjklMUI3JTAwJTA0JTAxJTAwJTAxJTYNCgkwJTExK1QlMTklMDYlMTElMDAtJTFCLSUxQyUxMSUwMSUxNyUxNyU2MCUxMStUJTE2JTFBJTA0JTFDJTJGJTEwNyUwQyUxQyUwRA0KCSUwNiUxRCUyMVklMjclMEFNJTBFJTE3Ij48U1BBTiBMQU5HPSJmciI+PC9TUEFOPjxTUEFOIExBTkc9ImZyIj48L1NQQU4+PFNQDQoJQU4gTEFORz0iZnItZnIiPjxGT05UIENPTE9SPSIjMjYyNjI2IiBTSVpFPTIgRkFDRT0iQ2FsaWJyaSI+RFJDR1A8L0ZPTlQ+PC8NCglTUEFOPjxTUEFOIExBTkc9ImZyIj48L1NQQU4+PC9BPjxTUEFOIExBTkc9ImZyIj48L1NQQU4+PFNQQU4gTEFORz0iZnIiPjwvUw0KCVBBTj48U1BBTiBMQU5HPSJmci1mciI+PEZPTlQgQ09MT1I9IiMyNjI2MjYiIFNJWkU9MiBGQUNFPSJDYWxpYnJpIj4vPC9GT05UDQoJPjwvU1BBTj48U1BBTiBMQU5HPSJmciI+IDwvU1BBTj48QSBIUkVGPSJodHRwOi8vb25lLWRpcmVjdG9yeS5zc28uZnJhbmNldGUNCglsZWNvbS5mci9hbm51YWlyZS9lbnRpdGUuZG8/YWN0aW9uPVZpZXcmYW1wO3VpZD0lMjMlMDAlN0UlMEQlMTMlMDclMDklNUUlDQoJMjMlMDAlN0UlMEQlMDIlMEIlMDIlMDIlNjAlMUE2VCUxRiUwRUklMUQ5SCUyNSUxRCU1QyUwNyUxME8lMjklMUI3JTAwJTA0JTANCgkxJTAwJTAxJTYwJTExK1QlMTklMDYlMTElMDAtJTFCLSUxQyUxMSUwMSUxNyUxNyU2MCUxMStUJTE2JTFBJTA0JTFDJTJGJTEwNw0KCSUwQyUxQyUwRCUwNiUxRCUyMVklMjclMEFNJTBFJTE3Ij48U1BBTiBMQU5HPSJmciI+PC9TUEFOPjxTUEFOIExBTkc9ImZyIj48DQoJL1NQQU4+PFNQQU4gTEFORz0iZnItZnIiPjxGT05UIENPTE9SPSIjMjYyNjI2IiBTSVpFPTIgRkFDRT0iQ2FsaWJyaSI+RENPTDwNCgkvRk9OVD48L1NQQU4+PFNQQU4gTEFORz0iZnIiPjwvU1BBTj48L0E+PFNQQU4gTEFORz0iZnIiPjwvU1BBTj48U1BBTiBMQU5HPQ0KCSJmciI+PC9TUEFOPjxTUEFOIExBTkc9ImZyLWZyIj48Rk9OVCBDT0xPUj0iIzI2MjYyNiIgU0laRT0yIEZBQ0U9IkNhbGlicmkiDQoJPi88L0ZPTlQ+PC9TUEFOPjxTUEFOIExBTkc9ImZyIj4gPC9TUEFOPjxBIEhSRUY9Imh0dHA6Ly9vbmUtZGlyZWN0b3J5LnNzby4NCglmcmFuY2V0ZWxlY29tLmZyL2FubnVhaXJlL2VudGl0ZS5kbz9hY3Rpb249VmlldyZhbXA7dWlkPSUyMyUwMCU3RSUxQSUxNSUwDQoJNCUwMyUxMS0lMDclMjZFJTFGJTFEWCUxNiUyRiUxQSUyRkUlMUYlMURYJTE2JTNFJTE2JTI0JTE5JTVDJTA3JTEwTyUyMyUxM28NCgklMDYlMDVVJTAzJTA2JTYwJTFBNlQlMTUlMDYlMTElMUI4JTFDJTI2JTFBJTVDJTBDJTA2TyUyNSUxQjclMUIlMTElMDYlMEIlMA0KCTctJTFDMSUwQyU1QyUwQyUwNk8qJTA3JTIyJTA3JTEzJTBEJTExJTE3KyUxMCslMDYlMUREJTAxJTExcSUxMzEiPjxTUEFOIExBDQoJTkc9ImZyIj48L1NQQU4+PFNQQU4gTEFORz0iZnIiPjwvU1BBTj48U1BBTiBMQU5HPSJmci1mciI+PEZPTlQgQ09MT1I9IiMyNjINCgk2MjYiIFNJWkU9MiBGQUNFPSJDYWxpYnJpIj5TRUxGQ0FSRTwvRk9OVD48L1NQQU4+PFNQQU4gTEFORz0iZnIiPjwvU1BBTj48Lw0KCUE+PFNQQU4gTEFORz0iZnIiPjwvU1BBTj48U1BBTiBMQU5HPSJmciI+PC9TUEFOPjxTUEFOIExBTkc9ImZyLWZyIj48Rk9OVCBDDQoJT0xPUj0iIzI2MjYyNiIgU0laRT0yIEZBQ0U9IkNhbGlicmkiPiA8L0ZPTlQ+PC9TUEFOPjwvUD5ubjxQIERJUj1MVFI+PFNQDQoJQU4gTEFORz0iZnItZnIiPjxGT05UIENPTE9SPSIjMjYyNjI2IiBTSVpFPTIgRkFDRT0iQ2FsaWJyaSI+MDEgNTcgMzYgMDEgNzANCgk8L0ZPTlQ+PC9TUEFOPjwvUD5ubjxQIERJUj1MVFI+PFNQQU4gTEFORz0iZnIiPjwvU1BBTj48U1BBTiBMQU5HPSJmciI+PC8NCglTUEFOPjxTUEFOIExBTkc9ImZyLWZyIj48Rk9OVCBDT0xPUj0iIzI2MjYyNiIgU0laRT0yIEZBQ0U9IkNhbGlicmkiPjA3IDg5IA0KCTUxIDgxIDYxPC9GT05UPjwvU1BBTj48L1A+bm48UCBESVI9TFRSPjxTUEFOIExBTkc9ImZyIj48L1NQQU4+PEEgSFJFRj0iZg0KCWlsZTovL2x1eGlzbGUuc2lld2V0b2xhQG9yYW5nZS5jb20iPjxTUEFOIExBTkc9ImZyIj48L1NQQU4+PFNQQU4gTEFORz0iZnItDQoJZnIiPjxGT05UIENPTE9SPSIjRjc5NjQ2IiBGQUNFPSJDYWxpYnJpIj5sdXhpc2xlLnNpZXdldG9sYUBvcmFuZ2UuY29tPC9GT04NCglUPjwvU1BBTj48U1BBTiBMQU5HPSJmciI+PC9TUEFOPjwvQT48U1BBTiBMQU5HPSJmciI+PC9TUEFOPjxTUEFOIExBTkc9ImZyLQ0KCWZyIj48L1NQQU4+PC9QPm5uPFAgRElSPUxUUj48U1BBTiBMQU5HPSJmciI+PC9TUEFOPjxTUEFOIExBTkc9ImZyIj48L1NQQQ0KCU4+PFNQQU4gTEFORz0iZnIiPjwvU1BBTj48U1BBTiBMQU5HPSJmci1mciI+PEJSPm48L1NQQU4+PC9QPm5uPFAgRElSPUxUDQoJUj48U1BBTiBMQU5HPSJmciI+PC9TUEFOPjxTUEFOIExBTkc9ImZyLWZyIj48L1NQQU4+PC9QPm5uPFAgRElSPUxUUj48U1BBDQoJTiBMQU5HPSJmciI+PC9TUEFOPjwvUD5ubjxQIERJUj1MVFI+PFNQQU4gTEFORz0iZnIiPjwvU1BBTj48L1A+bm48L0JPRA0KCVk+bjwvSFRNTD4NClgtTUlDUk9TT0ZULUNETy1CVVNZU1RBVFVTOlRFTlRBVElWRQ0KWC1NSUNST1NPRlQtQ0RPLUlNUE9SVEFOQ0U6MQ0KWC1NSUNST1NPRlQtRElTQUxMT1ctQ09VTlRFUjpGQUxTRQ0KWC1NUy1PTEstQVBQVExBU1RTRVFVRU5DRTowDQpYLU1TLU9MSy1DT05GVFlQRTowDQpCRUdJTjpWQUxBUk0NClRSSUdHRVI6LVBUMTVNDQpBQ1RJT046RElTUExBWQ0KREVTQ1JJUFRJT046UmVtaW5kZXINCkVORDpWQUxBUk0NCkVORDpWRVZFTlQNCkJFR0lOOlZFVkVOVA0KQVRURU5ERUU7Q049IkFHTkVTIFBhdHJpY2sgT0YvRFNJRiI7UlNWUD1UUlVFOm1haWx0bzpwYXRyaWNrLmFnbmVzQG9yYW5nZS5jDQoJb20NCkFUVEVOREVFO0NOPSJQT0lST1QgSmVhbiBEYXZpZCBPRi9EU0lGIjtSU1ZQPVRSVUU6bWFpbHRvOmplYW5kYXZpZC5wb2lyb3RAbw0KCXJhbmdlLmNvbQ0KQVRURU5ERUU7Q049IkJFVVpPTiBTb2xlbmUgT0YvRFNJRiI7UlNWUD1UUlVFOm1haWx0bzpzb2xlbmUuYmV1em9uQG9yYW5nZS5jDQoJb20NCkFUVEVOREVFO0NOPSJDSEVTVEVSUyBEYW5pZWwgRXh0IE9GL0RTSUYiO1JTVlA9VFJVRTptYWlsdG86ZGNoZXN0ZXJzLmV4dEBvcg0KCWFuZ2UuY29tDQpBVFRFTkRFRTtDTj0iU09XIEJldHR5IEV4dCBPRi9EU0lGIjtSU1ZQPVRSVUU6bWFpbHRvOmJlc293LmV4dEBvcmFuZ2UuY29tDQpBVFRFTkRFRTtDTj0iU0FMSEkgQ2hhZmlhYSBFeHQgT0YvRFNJRiI7UlNWUD1UUlVFOm1haWx0bzpjc2FsaGkuZXh0QG9yYW5nZS4NCgljb20NCkFUVEVOREVFO0NOPSJCT1VLSExJRkEgS2FyaW0gT0YvRFNJRiI7UlNWUD1UUlVFOm1haWx0bzprYXJpbS5ib3VraGxpZmFAb3Jhbg0KCWdlLmNvbQ0KQVRURU5ERUU7Q049Ik9VTEQgQUhNRURPVSBNb2hhbWVkIExlbWluZSBPRi9EU0lGIjtSU1ZQPVRSVUU6bWFpbHRvOmxlbWluZS5hDQoJaG1lZG91QG9yYW5nZS5jb20NCkFUVEVOREVFO0NOPSJORElBWUUgWWFraGFtIE9GL0RTSUYiO1JTVlA9VFJVRTptYWlsdG86eWFraGFtLm5kaWF5ZUBvcmFuZ2UuYw0KCW9tDQpBVFRFTkRFRTtDTj0iUkVDSEVSIE5pY29sYXMgT0YvRFNJRiI7UlNWUD1UUlVFOm1haWx0bzpuaWNvbGFzLnJlY2hlckBvcmFuZ2UNCgkuY29tDQpBVFRFTkRFRTtDTj0iQ0FUUk9VIE1hdGhpYXMgT0YvRFNJRiI7UlNWUD1UUlVFOm1haWx0bzptYXRoaWFzLmNhdHJvdUBvcmFuZ2UNCgkuY29tDQpBVFRFTkRFRTtDTj0iWkhPVSBKaW5nIEppbmcgT0YvRFNJRiI7UlNWUD1UUlVFOm1haWx0bzpqaW5namluZy56aG91QG9yYW5nZS4NCgljb20NCkFUVEVOREVFO0NOPSJDQVNTT1UgQ2hyaXN0b3BoZSBFeHQgT0YvRFNJRiI7UlNWUD1UUlVFOm1haWx0bzpjY2Fzc291LmV4dEBvcg0KCWFuZ2UuY29tDQpBVFRFTkRFRTtDTj0iQlJJTExBTlQgSmVyb21lIEV4dCBPRi9EU0lGIjtSU1ZQPVRSVUU6bWFpbHRvOmplYnJpbGxhbnQuZXh0QG8NCglyYW5nZS5jb20NCkFUVEVOREVFO0NOPSJCQVlBUlQgT2xpdmllciBPRi9EU0lGIjtSU1ZQPVRSVUU6bWFpbHRvOm9saXZpZXIuYmF5YXJ0QG9yYW5nZQ0KCS5jb20NCkFUVEVOREVFO0NOPSJGQURMQU9VSSBJZHJpc3MgRXh0IE9GL0RTSUYiO1JTVlA9VFJVRTptYWlsdG86aWZhZGxhb3VpLmV4dEBvcg0KCWFuZ2UuY29tDQpBVFRFTkRFRTtDTj0iRkVMSUhPIFdpbGZyaWQgT0YvRFNJRiI7UlNWUD1UUlVFOm1haWx0bzp3aWxmcmlkLmZlbGlob0BvcmFuZ2UNCgkuY29tDQpBVFRFTkRFRTtDTj0iQUxHRVIgR3LDqWdvcnkgT0YvRFNJRiI7UlNWUD1UUlVFOm1haWx0bzpncmVnb3J5LmFsZ2VyQG9yYW5nZS4NCgljb20NCkFUVEVOREVFO0NOPSJCUkFORFQgQWxleGlzIE9GL0RTSUYiO1JTVlA9VFJVRTptYWlsdG86YWxleGlzLmJyYW5kdEBvcmFuZ2UuYw0KCW9tDQpBVFRFTkRFRTtDTj0iTUVORFJBUyBGcmFuY2sgT0YvRFNJRiI7UlNWUD1UUlVFOm1haWx0bzpmcmFuY2subWVuZHJhc0BvcmFuZ2UNCgkuY29tDQpBVFRFTkRFRTtDTj0iQ0hFSEFJQk9VIEF6ZWRkaW5lIE9GL0RTSUYiO1JTVlA9VFJVRTptYWlsdG86YXplZGRpbmUuY2hlaGFpYm8NCgl1QG9yYW5nZS5jb20NCkFUVEVOREVFO0NOPSJaQUhSQU1BTkUgSGFzc2FuIE9GL0RTSUYiO1JTVlA9VFJVRTptYWlsdG86aGFzc2FuLnphaHJhbWFuZUBvcg0KCWFuZ2UuY29tDQpBVFRFTkRFRTtDTj0iVE9ET1JPVkEgQW5hIE9GL0RTSUYiO1JTVlA9VFJVRTptYWlsdG86YW5hLnRvZG9yb3ZhQG9yYW5nZS5jb20NCkFUVEVOREVFO0NOPSJQRVRJVCBKdWxpZXR0ZSBFeHQgT0YvRFNJRiI7UlNWUD1UUlVFOm1haWx0bzpqcGV0aXQuZXh0QG9yYW5nZQ0KCS5jb20NCkFUVEVOREVFO0NOPSJCUkVURUFVWCBMaW9uZWwgT0YvRFNJRiI7UlNWUD1UUlVFOm1haWx0bzpsaW9uZWwxLmJyZXRlYXV4QG9yYQ0KCW5nZS5jb20NCkFUVEVOREVFO0NOPSJCT1VDSEFSRCBDaHJpc3RvcGhlIE9GL0RTSUYiO1JTVlA9VFJVRTptYWlsdG86Y2hyaXN0b3BoZTEuYm91Yw0KCWhhcmRAb3JhbmdlLmNvbQ0KQVRURU5ERUU7Q049IkNIQUxMSUdVSSBTaWRpIElkcmlzcyBFeHQgT0YvRFNJRiI7UlNWUD1UUlVFOm1haWx0bzpzY2hhbGxpZ3VpDQoJLmV4dEBvcmFuZ2UuY29tDQpBVFRFTkRFRTtDTj0iR09VU1NFQVUgTWF4aW1lIEV4dCBPRi9EU0lGIjtSU1ZQPVRSVUU6bWFpbHRvOm1nb3Vzc2VhdS5leHRAb3INCglhbmdlLmNvbQ0KQVRURU5ERUU7Q049IkFST05ERUwgRXJpY2sgRXh0IE9GL0RTSUYiO1JTVlA9VFJVRTptYWlsdG86ZWFyb25kZWwuZXh0QG9yYW5nDQoJZS5jb20NCkFUVEVOREVFO0NOPWVuZ3VlcnJhbi5sb3VybWVAZ2ZpLmZyO1JTVlA9VFJVRTptYWlsdG86ZW5ndWVycmFuLmxvdXJtZUBnZmkuZg0KCXINCkFUVEVOREVFO0NOPSJCRU5LQURET1VSIEthZGRvdXIgRXh0IE9GL0RTSUYiO1JTVlA9VFJVRTptYWlsdG86a2JlbmthZGRvdXIuZQ0KCXh0QG9yYW5nZS5jb20NCkFUVEVOREVFO0NOPSJST0JJTiBTdMOpcGhhbmUgRXh0IE9GL0RTSUYiO1JTVlA9VFJVRTptYWlsdG86c3JvYmluLmV4dEBvcmFuZw0KCWUuY29tDQpBVFRFTkRFRTtDTj0iTU9VS1JJTSBBZGlsIEV4dCBPRi9EU0lGIjtSU1ZQPVRSVUU6bWFpbHRvOmFtb3VrcmltLmV4dEBvcmFuZ2UNCgkuY29tDQpBVFRFTkRFRTtDTj0iS0hBTElLQU5FIE5hamxhYSBPRi9EU0lGIjtSU1ZQPVRSVUU6bWFpbHRvOm5hamxhYS5raGFsaWthbmVAb3INCglhbmdlLmNvbQ0KQVRURU5ERUU7Q049IkNIRVZBTElFUiBTeWx2YWluIE9GL0RTSUYiO1JTVlA9VFJVRTptYWlsdG86c3lsdmFpbi5jaGV2YWxpZXJADQoJb3JhbmdlLmNvbQ0KQVRURU5ERUU7Q049IlpBWUFORSBTb3VmaWFuZSBFeHQgT0YvRFNJRiI7UlNWUD1UUlVFOm1haWx0bzpzemF5YW5lLmV4dEBvcmFuDQoJZ2UuY29tDQpBVFRFTkRFRTtDTj0iQ0hBTVNFRERJTkUgU2FsaW0gRXh0IE9GL0RTSUYiO1JTVlA9VFJVRTptYWlsdG86c2NoYW1zZWRkaW5lLmUNCgl4dEBvcmFuZ2UuY29tDQpBVFRFTkRFRTtDTj0iTE9VUE1PTiBHaGlzbGFpbiBPRi9EU0lGIjtSU1ZQPVRSVUU6bWFpbHRvOmdoaXNsYWluLmxvdXBtb25Ab3INCglhbmdlLmNvbQ0KQVRURU5ERUU7Q049IlNBVklWQU5IIEVyaWMgRXh0IE9GL0RTSUYiO1JTVlA9VFJVRTptYWlsdG86ZXNhdml2YW5oLmV4dEBvcmFuDQoJZ2UuY29tDQpBVFRFTkRFRTtDTj0iR0VSVU0gVmFsZW50aW4gRXh0IE9GL0RTSUYiO1JTVlA9VFJVRTptYWlsdG86dmdlcnVtLmV4dEBvcmFuZ2UNCgkuY29tDQpBVFRFTkRFRTtDTj0iJ09saXZpZXIgVkFOU09OJyI7UlNWUD1UUlVFOm1haWx0bzpvbGl2aWVyLnZhbnNvbkBncmVlbi1jb25zZWkNCglsLmNvbQ0KQVRURU5ERUU7Q049IlpPUkRBTiBQaGlsaXBwZSBPRi9EU0lGIjtSU1ZQPVRSVUU6bWFpbHRvOnBoaWxpcHBlLnpvcmRhbkBvcmFuDQoJZ2UuY29tDQpBVFRFTkRFRTtDTj0iRkVOQVlST1UgQW5uZSBFeHQgT0YvRFNJRiI7UlNWUD1UUlVFOm1haWx0bzphZmVuYXlyb3UuZXh0QG9yYW4NCglnZS5jb20NCkFUVEVOREVFO0NOPSJCRUxPVUJBRCBNeXJpYW0gRXh0IE9GL0RTSUYiO1JTVlA9VFJVRTptYWlsdG86bWJlbG91YmFkLmV4dEBvcg0KCWFuZ2UuY29tDQpBVFRFTkRFRTtDTj0iTEFWQUJSRSBDbMOpbWVudCBPRi9EU0lGIjtSU1ZQPVRSVUU6bWFpbHRvOmNsZW1lbnQubGF2YWJyZUBvcmENCgluZ2UuY29tDQpDTEFTUzpQVUJMSUMNCkNSRUFURUQ6MjAxNDA0MjNUMTIxODQ3Wg0KREVTQ1JJUFRJT046Qm9uam91ciB0b3V0IGxlIG1vbmRlLG5uQXByw6hzIDIgYW5zIHBhc3PDqXMgYXUgc2VpbiBkZSBs4oCZDQoJw6lxdWlwZSBMZWdhY3ksIGxlIHRlbXBzIGVzdCB2ZW51IHBvdXIgbW9pIGRlIHBhcnRpciB2ZXJzIGTigJlhdXRyZXMgYXZlbg0KCXR1cmVz4oCmLm5uSmUgdm91cyBpbnZpdGUgw6AgcGFydGFnZXIgdW4gcGV0aXQtZMOpamV1bmVyIGxlIE1lcmNyZWRpIDMwIA0KCWF2cmlsIDIwMTQgw6AgMTBoMDAgZGFucyBs4oCZb3BlbnNwYWNlIDk0N0Iubm5O4oCZaMOpc2l0ZXogcGFzIMOgIHRyYW5zZg0KCcOpcmVyIGzigJlpbnZpdGF0aW9uIGF1eCBwZXJzb25uZXMgcXVlIGrigJlhdXJhaXMgb3VibGnDqS5ubm5Db3JkaWFsZW1lDQoJbnQsblRhcmlrIEZBUklTbm4NCkRURU5EO1RaSUQ9IlJvbWFuY2UgU3RhbmRhcmQgVGltZSI6MjAxNDA0MzBUMTAzMDAwDQpEVFNUQU1QOjIwMTQwNDIzVDEyMTgzM1oNCkRUU1RBUlQ7VFpJRD0iUm9tYW5jZSBTdGFuZGFyZCBUaW1lIjoyMDE0MDQzMFQxMDAwMDANCkxBU1QtTU9ESUZJRUQ6MjAxNDA0MjNUMTIxODQ3Wg0KTE9DQVRJT046b3BlbnNwYWNlIDk0N0INCk9SR0FOSVpFUjtDTj0iRkFSSVMgVGFyaWsgRXh0IDEgT0YvRFNJRiI6bWFpbHRvOnRhZmFyaXMuZXh0QG9yYW5nZS5jb20NClBSSU9SSVRZOjUNClNFUVVFTkNFOjANClNVTU1BUlk7TEFOR1VBR0U9ZnI6UG90IGRlIGTDqXBhcnQgDQpUUkFOU1A6T1BBUVVFDQpVSUQ6MDQwMDAwMDA4MjAwRTAwMDc0QzVCNzEwMUE4MkUwMDgwMDAwMDAwMEQwOTU5MzAwRkU1RUNGMDEwMDAwMDAwMDAwMDAwMDANCgkwMTAwMDAwMDBBMEI5Mzk2RkI5N0E4RjRFOEQ3REVGMkVBNzlGOEQ0Qw0KWC1BTFQtREVTQztGTVRUWVBFPXRleHQvaHRtbDo8IURPQ1RZUEUgSFRNTCBQVUJMSUMgIi0vL1czQy8vRFREIEhUTUwgMy4yLy9FDQoJTiI+bjxIVE1MPm48SEVBRD5uPE1FVEEgTkFNRT0iR2VuZXJhdG9yIiBDT05URU5UPSJNUyBFeGNoYW5nZSBTZXJ2ZXIgdmUNCglyc2lvbiAxNC4wMi41MDA0LjAwMCI+bjxUSVRMRT48L1RJVExFPm48L0hFQUQ+bjxCT0RZPm48IS0tIENvbnZlcnRlZCBmDQoJcm9tIHRleHQvcnRmIGZvcm1hdCAtLT5ubjxQIERJUj1MVFI+PFNQQU4gTEFORz0iZnIiPjwvU1BBTj48U1BBTiBMQU5HPSJmDQoJciI+PEZPTlQgRkFDRT0iQ2FsaWJyaSI+Qm9uam91ciB0b3V0IGxlIG1vbmRlLDwvRk9OVD48L1NQQU4+PC9QPm5uPFAgREkNCglSPUxUUj48U1BBTiBMQU5HPSJmciI+PC9TUEFOPjxTUEFOIExBTkc9ImZyIj48L1NQQU4+PFNQQU4gTEFORz0iZnIiPjwvU1BBTg0KCT48L1A+bm48UCBESVI9TFRSPjxTUEFOIExBTkc9ImZyIj48L1NQQU4+PFNQQU4gTEFORz0iZnIiPjxGT05UIEZBQ0U9IkNhbA0KCWlicmkiPkFwcsOocyAyIGFucyBwYXNzw6lzIGF1IHNlaW4gZGUgbOKAmcOpcXVpcGUgTGVnYWN5LCBsZSB0ZW1wcyBlc3QgdmUNCgludSBwb3VyIG1vaSBkZSBwYXJ0aXIgdmVycyBk4oCZYXV0cmVzIGF2ZW50dXJlc+KApi48L0ZPTlQ+PC9TUEFOPjwvUD5ubjwNCglQIERJUj1MVFI+PFNQQU4gTEFORz0iZnIiPjxGT05UIEZBQ0U9IkNhbGlicmkiPkplIHZvdXMgaW52aXRlIMOgIHBhcnRhZ2VyIA0KCXVuIHBldGl0LWTDqWpldW5lciBsZSBNZXJjcmVkaSAzMCBhdnJpbCAyMDE0IMOgIDEwaDAwIGRhbnMgbOKAmW9wZW5zcGFjZSA5DQoJNDdCLjwvRk9OVD48L1NQQU4+PC9QPm5uPFAgRElSPUxUUj48U1BBTiBMQU5HPSJmciI+PEZPTlQgRkFDRT0iQ2FsaWJyaSI+DQoJTuKAmWjDqXNpdGV6IHBhcyDDoCB0cmFuc2bDqXJlciBs4oCZaW52aXRhdGlvbiBhdXggcGVyc29ubmVzIHF1ZSBq4oCZYXVyYWkNCglzIG91Ymxpw6kuPC9GT05UPjwvU1BBTj48L1A+bjxCUj5ubjxQIERJUj1MVFI+PFNQQU4gTEFORz0iZnIiPjxGT05UIEZBQw0KCUU9IkNhbGlicmkiPkNvcmRpYWxlbWVudCw8L0ZPTlQ+PC9TUEFOPjwvUD5ubjxQIERJUj1MVFI+PFNQQU4gTEFORz0iZnIiDQoJPjxGT05UIEZBQ0U9IkNhbGlicmkiPlRhcmlrIEZBUklTPC9GT05UPjwvU1BBTj48U1BBTiBMQU5HPSJmciI+PC9TUEFOPjxTUEENCglOIExBTkc9ImZyIj48L1NQQU4+PC9QPm5uPFAgRElSPUxUUj48U1BBTiBMQU5HPSJmciI+PC9TUEFOPjxTUEFOIExBTkc9ImYNCglyIj48L1NQQU4+PFNQQU4gTEFORz0iZnIiPjwvU1BBTj48L1A+bm48L0JPRFk+bjwvSFRNTD4NClgtTUlDUk9TT0ZULUNETy1CVVNZU1RBVFVTOlRFTlRBVElWRQ0KWC1NSUNST1NPRlQtQ0RPLUlNUE9SVEFOQ0U6MQ0KWC1NSUNST1NPRlQtRElTQUxMT1ctQ09VTlRFUjpGQUxTRQ0KWC1NUy1PTEstQVVUT1NUQVJUQ0hFQ0s6RkFMU0UNClgtTVMtT0xLLUNPTkZUWVBFOjANCkJFR0lOOlZBTEFSTQ0KVFJJR0dFUjotUFQxNU0NCkFDVElPTjpESVNQTEFZDQpERVNDUklQVElPTjpSZW1pbmRlcg0KRU5EOlZBTEFSTQ0KRU5EOlZFVkVOVA0KQkVHSU46VkVWRU5UDQpBVFRFTkRFRTtDTj0iTEFWQUJSRSBDbMOpbWVudCBPRi9EU0lGIjtSU1ZQPVRSVUU6bWFpbHRvOmNsZW1lbnQubGF2YWJyZUBvcmENCgluZ2UuY29tDQpBVFRFTkRFRTtDTj1jaHJpc3RvcGhlLmNvbWJldEBncmVlbi1jb25zZWlsLmNvbTtSU1ZQPVRSVUU6bWFpbHRvOmNocmlzdG9waGUNCgkuY29tYmV0QGdyZWVuLWNvbnNlaWwuY29tDQpBVFRFTkRFRTtDTj1vbGl2aWVyLnZhbnNvbkBncmVlbi1jb25zZWlsLmNvbTtSU1ZQPVRSVUU6bWFpbHRvOm9saXZpZXIudmFuc28NCgluQGdyZWVuLWNvbnNlaWwuY29tDQpBVFRFTkRFRTtDTj1nZW9yZ2VzLnJvY2NvQGdyZWVuLWNvbnNlaWwuY29tO1JTVlA9VFJVRTptYWlsdG86Z2Vvcmdlcy5yb2Njb0ANCglncmVlbi1jb25zZWlsLmNvbQ0KQ0xBU1M6UFVCTElDDQpDUkVBVEVEOjIwMTQwNDI0VDE0MjAwM1oNCkRFU0NSSVBUSU9OOm5Ob20JTW90IGRlIHBhc3NlCU7CsCBkZSBwb250CURhdGUgKEFBQUEtTU0tSkopCUhldXJlIGRlIGTDqWJ1DQoJdAlGdXNlYXV4IGhvcmFpcmUJblBvaW5MTzI5MDQyMDE0CTI1MDQyMDE0CSszMyAxIDU4IDk5IDUzIDg4CTIwMTQtMDQtMjUJMQ0KCTA6MzAJKEdNVCswMTowMCkgQnJ1eGVsbGVzLCBDb3BlbmhhZ3VlLCBNYWRyaWQsIFBhcmlzIChoZXVyZSBkJ8OpdMOpKQkNCglublZvdXMgcG91dmV6IGZvdXJuaXIgw6Agdm9zIGludml0w6lzIGxlcyBsaWVucyBzdWl2YW50cyBwb3VyIGxldXIgcGVybWV0DQoJdHJlIGRlIHJlam9pbmRyZSBsYSBjb25mw6lyZW5jZSBmYWNpbGVtZW50IGVuIHF1ZWxxdWVzIGNsaWNzIDogbioJZGVwdWlzIA0KCUlOVFJBTkVUIDogY2xpcXVleiBpY2kgPGh0dHBzOi8vbW9uc2kuc3NvLmZyYW5jZXRlbGVjb20uZnIvaW5kZXguYXNwP3RhcmdlDQoJdD1IVFRQJTNBJTJGJTJGY29vcG5ldC5zc28uZnJhbmNldGVsZWNvbS5mciUyRkRlZmF1bHQuYXNweCUzZlJldHVyblVybCUzZCUNCgkyNTJmRGlyZWN0QWNjZXNzJTI1MmZTdGFydENvbmZlcmVuY2VCeVVybC5hc3B4JTI1M2ZjcElkJTI1M2RGRDA3MTlGNi1ERTdFLQ0KCTRBRTctOUE0OC1GMDJBNjY1NDE2QkU+ICBuKglkZXB1aXMgSU5URVJORVQgOiBjbGlxdWV6IGljaSA8aHR0cHM6Ly9jb29wbmUNCgl0Lm11bHRpbWVkaWEtY29uZmVyZW5jZS5vcmFuZ2UtYnVzaW5lc3MuY29tL0RpcmVjdEFjY2Vzcy9TdGFydENvbmZlcmVuY2VCeQ0KCVVybC5hc3B4P2NwSWQ9RkQwNzE5RjYtREU3RS00QUU3LTlBNDgtRjAyQTY2NTQxNkJFPiAgbm4NCkRURU5EO1RaSUQ9IlJvbWFuY2UgU3RhbmRhcmQgVGltZSI6MjAxNDA0MjVUMTEzMDAwDQpEVFNUQU1QOjIwMTQwNDI0VDE0MjAwMFoNCkRUU1RBUlQ7VFpJRD0iUm9tYW5jZSBTdGFuZGFyZCBUaW1lIjoyMDE0MDQyNVQxMDMwMDANCkxBU1QtTU9ESUZJRUQ6MjAxNDA0MjRUMTQyMDAzWg0KTE9DQVRJT046KzMzIDEgNTggOTkgNTMgODgNCk9SR0FOSVpFUjtDTj0iRkVOQVlST1UgQW5uZSBFeHQgT0YvRFNJRiI6bWFpbHRvOmFmZW5heXJvdS5leHRAb3JhbmdlLmNvbQ0KUFJJT1JJVFk6NQ0KU0VRVUVOQ0U6MA0KU1VNTUFSWTtMQU5HVUFHRT1mcjpQb2ludCBMTw0KVFJBTlNQOk9QQVFVRQ0KVUlEOjA0MDAwMDAwODIwMEUwMDA3NEM1QjcxMDFBODJFMDA4MDAwMDAwMDBFMEVGODQwQUQ5NUZDRjAxMDAwMDAwMDAwMDAwMDAwDQoJMDEwMDAwMDAwOTNCNDkxQTgzNzI0RTc0OUE1OEZCQUVENzA4M0Q2MDcNClgtQUxULURFU0M7Rk1UVFlQRT10ZXh0L2h0bWw6PCFET0NUWVBFIEhUTUwgUFVCTElDICItLy9XM0MvL0RURCBIVE1MIDMuMi8vRQ0KCU4iPm48SFRNTD5uPEhFQUQ+bjxNRVRBIE5BTUU9IkdlbmVyYXRvciIgQ09OVEVOVD0iTVMgRXhjaGFuZ2UgU2VydmVyIHZlDQoJcnNpb24gMTQuMDIuNTAwNC4wMDAiPm48VElUTEU+PC9USVRMRT5uPC9IRUFEPm48Qk9EWT5uPCEtLSBDb252ZXJ0ZWQgZg0KCXJvbSB0ZXh0L3J0ZiBmb3JtYXQgLS0+bm48UCBESVI9TFRSPjxTUEFOIExBTkc9ImZyIj48L1NQQU4+PFNQQU4gTEFORz0iZg0KCXIiPjwvU1BBTj48U1BBTiBMQU5HPSJmciI+PC9TUEFOPjxTUEFOIExBTkc9ImZyIj48L1NQQU4+PC9QPm5uPFAgRElSPUxUUg0KCSBBTElHTj1DRU5URVI+PFNQQU4gTEFORz0iZnIiPjxCPjwvQj48L1NQQU4+PFNQQU4gTEFORz0iZnIiPjxCPjwvQj48L1NQQU4+DQoJPFNQQU4gTEFORz0iZnIiPjxCPjwvQj48L1NQQU4+PEI+PFNQQU4gTEFORz0iZnIiPjxGT05UIEZBQ0U9IlRpbWVzIE5ldyBSb20NCglhbiI+Tm9tJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7IE1vdCBkZSBwYXNzZSZuYnNwOyZuYnNwOyZuYnNwOyBOwrAgDQoJZGUgcG9udCZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyBEYXRlIChBQUFBLU1NLUpKKSZuYnNwOyZuYnNwOw0KCSZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyBIZXVyZSBkZSBkw6lidXQmbmJzcDsgRnVzZWF1eCBob3JhaXJlPC9GT05UPg0KCTwvU1BBTj48L0I+PFNQQU4gTEFORz0iZnIiPjwvU1BBTj48U1BBTiBMQU5HPSJmciI+PC9TUEFOPjxTUEFOIExBTkc9ImZyIj48DQoJL1NQQU4+PFNQQU4gTEFORz0iZnIiPjxCUj5uPC9TUEFOPjxTUEFOIExBTkc9ImZyIj48L1NQQU4+PFNQQU4gTEFORz0iZnIiPg0KCTwvU1BBTj48U1BBTiBMQU5HPSJmciI+PC9TUEFOPjxTUEFOIExBTkc9ImZyIj48Rk9OVCBGQUNFPSJUaW1lcyBOZXcgUm9tYW4iDQoJPlBvaW5MTzI5MDQyMDE0Jm5ic3A7IDI1MDQyMDE0Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jg0KCW5ic3A7ICszMyAxIDU4IDk5IDUzIDg4Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7IDIwMTQtMDQNCgktMjUmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsgMTA6MzAmbmJzcDsmbmJzcDsgKEdNVCswMTowMCkgQnJ1DQoJeGVsbGVzLCBDb3BlbmhhZ3VlLCBNYWRyaWQsIFBhcmlzIChoZXVyZSBkJ8OpdMOpKSZuYnNwOzwvRk9OVD48L1NQQU4+PA0KCVNQQU4gTEFORz0iZnIiPjwvU1BBTj48U1BBTiBMQU5HPSJmciI+PC9TUEFOPjxTUEFOIExBTkc9ImZyIj48L1NQQU4+PFNQQU4gDQoJTEFORz0iZnIiPjxCUj5uPC9TUEFOPjxTUEFOIExBTkc9ImZyIj48L1NQQU4+PFNQQU4gTEFORz0iZnIiPjwvU1BBTj48U1BBTg0KCSBMQU5HPSJmciI+PC9TUEFOPjxTUEFOIExBTkc9ImZyIj48QlI+bjxGT05UIFNJWkU9MiBGQUNFPSJBcmlhbCI+Vm91cyBwb3UNCgl2ZXogZm91cm5pciDDoCB2b3MgaW52aXTDqXMgbGVzIGxpZW5zIHN1aXZhbnRzIHBvdXIgbGV1ciBwZXJtZXR0cmUgZGUgcmVqbw0KCWluZHJlIGxhIGNvbmbDqXJlbmNlIGZhY2lsZW1lbnQgZW4gcXVlbHF1ZXMgY2xpY3MgOiA8L0ZPTlQ+PC9TUEFOPjwvUD5ubg0KCTxQIERJUj1MVFI+PFNQQU4gTEFORz0iZnIiPjwvU1BBTj48U1BBTiBMQU5HPSJmciI+PC9TUEFOPjxTUEFOIExBTkc9ImZyIj48DQoJRk9OVCBTSVpFPTIgRkFDRT0iU3ltYm9sIj4mIzE4Mzs8Rk9OVCBGQUNFPSJDb3VyaWVyIE5ldyI+Jm5ic3A7Jm5ic3A7Jm4NCglic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PC9GT05UPjwvRk9OVD48L1NQQU4+PFNQQU4gTEFORz0iZnIiPjwvU1BBTj48U1BBDQoJTiBMQU5HPSJmciI+PC9TUEFOPjxTUEFOIExBTkc9ImZyIj48L1NQQU4+PFNQQU4gTEFORz0iZnIiPjwvU1BBTj48U1BBTiBMQU4NCglHPSJmciI+IDxGT05UIFNJWkU9MiBGQUNFPSJBcmlhbCI+ZGVwdWlzIElOVFJBTkVUIDo8L0ZPTlQ+PC9TUEFOPjxTUEFOIExBTg0KCUc9ImZyIj4gPC9TUEFOPjxBIEhSRUY9Imh0dHBzOi8vbW9uc2kuc3NvLmZyYW5jZXRlbGVjb20uZnIvaW5kZXguYXNwP3RhcmdlDQoJdD1IVFRQJTNBJTJGJTJGY29vcG5ldC5zc28uZnJhbmNldGVsZWNvbS5mciUyRkRlZmF1bHQuYXNweCUzZlJldHVyblVybCUzZCUNCgkyNTJmRGlyZWN0QWNjZXNzJTI1MmZTdGFydENvbmZlcmVuY2VCeVVybC5hc3B4JTI1M2ZjcElkJTI1M2RGRDA3MTlGNi1ERTdFLQ0KCTRBRTctOUE0OC1GMDJBNjY1NDE2QkUiPjxTUEFOIExBTkc9ImZyIj48L1NQQU4+PFNQQU4gTEFORz0iZnIiPjwvU1BBTj48U1BBDQoJTiBMQU5HPSJmciI+PFU+PC9VPjwvU1BBTj48VT48U1BBTiBMQU5HPSJmciI+PEZPTlQgQ09MT1I9IiMwMDAwRkYiIFNJWkU9MiANCglGQUNFPSJBcmlhbCI+Y2xpcXVleiBpY2k8L0ZPTlQ+PC9TUEFOPjwvVT48U1BBTiBMQU5HPSJmciI+PC9TUEFOPjwvQT48U1BBTg0KCSBMQU5HPSJmciI+PC9TUEFOPjxTUEFOIExBTkc9ImZyIj48L1NQQU4+PFNQQU4gTEFORz0iZnIiPjwvU1BBTj48U1BBTiBMQU5HDQoJPSJmciI+PEZPTlQgU0laRT0yIEZBQ0U9IkFyaWFsIj4gPC9GT05UPjwvU1BBTj48L1A+bm48UCBESVI9TFRSPjxTUEFOIExBDQoJTkc9ImZyIj48L1NQQU4+PFNQQU4gTEFORz0iZnIiPjwvU1BBTj48U1BBTiBMQU5HPSJmciI+PEZPTlQgU0laRT0yIEZBQ0U9IlMNCgl5bWJvbCI+JiMxODM7PEZPTlQgRkFDRT0iQ291cmllciBOZXciPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOw0KCSZuYnNwOzwvRk9OVD48L0ZPTlQ+PC9TUEFOPjxTUEFOIExBTkc9ImZyIj4gPEZPTlQgU0laRT0yIEZBQ0U9IkFyaWFsIj5kZXANCgl1aXMgSU5URVJORVQgOjwvRk9OVD48L1NQQU4+PFNQQU4gTEFORz0iZnIiPiA8L1NQQU4+PEEgSFJFRj0iaHR0cHM6Ly9jb29wbg0KCWV0Lm11bHRpbWVkaWEtY29uZmVyZW5jZS5vcmFuZ2UtYnVzaW5lc3MuY29tL0RpcmVjdEFjY2Vzcy9TdGFydENvbmZlcmVuY2VCDQoJeVVybC5hc3B4P2NwSWQ9RkQwNzE5RjYtREU3RS00QUU3LTlBNDgtRjAyQTY2NTQxNkJFIj48U1BBTiBMQU5HPSJmciI+PC9TUEENCglOPjxTUEFOIExBTkc9ImZyIj48L1NQQU4+PFNQQU4gTEFORz0iZnIiPjxVPjwvVT48L1NQQU4+PFU+PFNQQU4gTEFORz0iZnIiPg0KCTxGT05UIENPTE9SPSIjMDAwMEZGIiBTSVpFPTIgRkFDRT0iQXJpYWwiPmNsaXF1ZXogaWNpPC9GT05UPjwvU1BBTj48L1U+PFNQDQoJQU4gTEFORz0iZnIiPjwvU1BBTj48L0E+PFNQQU4gTEFORz0iZnIiPjwvU1BBTj48U1BBTiBMQU5HPSJmciI+PC9TUEFOPjxTUEENCglOIExBTkc9ImZyIj48L1NQQU4+PFNQQU4gTEFORz0iZnIiPjxGT05UIFNJWkU9MiBGQUNFPSJBcmlhbCI+IDwvRk9OVD48L1NQQQ0KCU4+PC9QPm5uPFAgRElSPUxUUj48U1BBTiBMQU5HPSJmciI+PC9TUEFOPjxTUEFOIExBTkc9ImZyIj48L1NQQU4+PFNQQU4gTA0KCUFORz0iZnIiPjwvU1BBTj48L1A+bm48L0JPRFk+bjwvSFRNTD4NClgtTUlDUk9TT0ZULUNETy1CVVNZU1RBVFVTOlRFTlRBVElWRQ0KWC1NSUNST1NPRlQtQ0RPLUlNUE9SVEFOQ0U6MQ0KWC1NSUNST1NPRlQtRElTQUxMT1ctQ09VTlRFUjpGQUxTRQ0KWC1NUy1PTEstQVBQVExBU1RTRVFVRU5DRTowDQpYLU1TLU9MSy1DT05GVFlQRTowDQpCRUdJTjpWQUxBUk0NClRSSUdHRVI6LVBUMTVNDQpBQ1RJT046RElTUExBWQ0KREVTQ1JJUFRJT046UmVt";
	 var decodedData = window.atob(encodedData);
	 console.log("prec");
	Callicalendar(decodedData);
	console.log("postc");
	
		var fileselect = $id("fileselect"),
			submitbutton = $id("submitbutton");
		// file select
		fileselect.addEventListener("change", FileSelectHandler, false);
		var xhr = new XMLHttpRequest();
		if (xhr.upload) {
			// remove submit button
			submitbutton.style.display = "none";
		}

	}

	// call initialization file
	if (window.File && window.FileList && window.FileReader) {
		Init();
	}

		 
		 //recupere la date/temps d'un event au format ICS
	function ParseICSDate(icsDate, type){
		 //type : time/date
		
		var year=0;
		var month=0;
		var day=0;
		var hour=0;
		var mins=0;
		var sec=0;
		
		//date building YYYY-MM-DD
		if(type=='date'){
		var year=icsDate.substring(0,4);
		var month=icsDate.substring(4,6);
		var day=icsDate.substring(6,8);
		
		var icsDate = year+"-"+month+"-"+day;	
		
		//time building hh:mm:ss Dont forget the "T" char in the middle 
		}else{
		
		var hour=icsDate.substring(9,11);
		var mins=icsDate.substring(11,13);
		var sec=icsDate.substring(13,15);
		
		var icsDate = hour+":"+mins+":"+sec;
		
		}
			return icsDate;
	}
	function formICSData(event){
		//pb : je n'arrive pas a manipuler l'event en dehors de la fonction Callicalendar()
	}
	
	
})();