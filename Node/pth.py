import phonenumbers
from phonenumbers import geocoder

Pn=phonenumbers.parse("+917347437787")
Pn1=phonenumbers.parse("+917018389596")
Pn2=phonenumbers.parse("+919418335120")

print("\nPhone Number Location")
print (geocoder.description_for_number(Pn, "en"))
print (geocoder.description_for_number(Pn1, "en"))
print (geocoder.description_for_number(Pn2, "en"))



