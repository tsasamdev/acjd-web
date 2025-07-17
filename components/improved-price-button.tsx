"use client"

import { useState } from "react"
import { EuroIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ImprovedPriceButton() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Sticky button that stays in a more accessible position */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40">
        <Button
          onClick={() => setOpen(true)}
          className="rounded-r-full rounded-l-none shadow-lg bg-sky-600 hover:bg-sky-700 text-white h-14 px-4 flex items-center gap-2 group"
          aria-label="Voir les tarifs"
        >
          <EuroIcon className="h-5 w-5" />
          <span className="opacity-0 max-w-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 overflow-hidden whitespace-nowrap">
            Tarifs
          </span>
        </Button>
      </div>

      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader className="border-b border-sky-100 pb-4 mb-6">
          <DialogTitle className="text-xl font-semibold text-sky-800">Tarifs</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="discovery" className="w-full">
          <TabsList className="flex w-full mb-6 bg-sky-50">
            <TabsTrigger value="discovery" className="flex-1 data-[state=active]:bg-sky-600 data-[state=active]:text-white">
              Pack decouverte
            </TabsTrigger>
            <TabsTrigger value="aircraft" className="flex-1 data-[state=active]:bg-sky-600 data-[state=active]:text-white">
              Avions
            </TabsTrigger>
            <TabsTrigger value="membership" className="flex-1 data-[state=active]:bg-sky-600 data-[state=active]:text-white">
              Cotisations club
            </TabsTrigger>
            <TabsTrigger value="insurance" className="flex-1 data-[state=active]:bg-sky-600 data-[state=active]:text-white">
              Licences, assurances
            </TabsTrigger>
          
          </TabsList>

          <TabsContent value="discovery" className="space-y-4">
            <div className="rounded-lg border border-sky-100 overflow-hidden">
              <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                <h3 className="font-medium text-sky-800">Tarifs horaires de location</h3>
              </div>
              <div className="divide-y divide-sky-100">
                <div className="px-4 py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-700">4 vols sur avion ecole</p>
                    <p className="text-xs text-gray-500">cotisation annuelle incluse - durée vol 45 mn</p>
                  </div>
                  <p className="font-semibold text-sky-700">460€</p>
                </div>
                <div className="px-4 py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-700">5 vols sur ULM Super Guépard</p>
                    <p className="text-xs text-gray-500">cotisation annuelle incluse - durée vol 45 mn</p>
                  </div>
                  <p className="font-semibold text-sky-700">460€</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="aircraft" className="space-y-4">
            <div className="rounded-lg border border-sky-100 overflow-hidden">
              <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                <h3 className="font-medium text-sky-800">Tarifs horaires</h3>
              </div>
              <div className="divide-y divide-sky-100">
                <div className="px-4 py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-700">Evektor Sportstar</p>
                    <p className="text-xs text-gray-500">Biplace école</p>
                  </div>
                  <p className="font-semibold text-sky-700">111€/h</p>
                </div>
                <div className="px-4 py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-700">Robin DR400 180cv</p>
                    <p className="text-xs text-gray-500">Quadriplace voyage</p>
                  </div>
                  <p className="font-semibold text-sky-700">180€/h</p>
                </div>
                <div className="px-4 py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-700">Robin DR400 160cv</p>
                    <p className="text-xs text-gray-500">Quadriplace voyage</p>
                  </div>
                  <p className="font-semibold text-sky-700">180€/h</p>
                </div>
                <div className="px-4 py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-700">Super guepard 100CV</p>
                    <p className="text-xs text-gray-500">ULM biplace</p>
                  </div>
                  <p className="font-semibold text-sky-700">81€/h</p>
                </div>
                 <div className="px-4 py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-700">Instruction</p>
                  </div>
                  <p className="font-semibold text-sky-700">24€/h</p>
                </div>
              </div>
            </div>
          </TabsContent>

<TabsContent value="insurance" className="space-y-4">
            <div className="rounded-lg border border-sky-100 overflow-hidden">
              <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                <h3 className="font-medium text-sky-800">Tarifs</h3>
              </div>
              <div className="divide-y divide-sky-100">
                <div className="px-4 py-3">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium text-gray-700">FFA</p>
                    <p className="font-semibold text-sky-700">92€</p>
                  </div>
                </div>
              </div>
               <div className="divide-y divide-sky-100">
                <div className="px-4 py-3">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium text-gray-700">FFA + Info pilote</p>
                    <p className="font-semibold text-sky-700">141€</p>
                  </div>
                </div>
              </div>
               <div className="divide-y divide-sky-100">
                <div className="px-4 py-3">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium text-gray-700">FFPULM</p>
                    <p className="font-semibold text-sky-700">83,20€</p>
                  </div>
                </div>
              </div>
               <div className="divide-y divide-sky-100">
                <div className="px-4 py-3">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium text-gray-700">FFPULM -25 ans</p>
                    <p className="font-semibold text-sky-700">52€</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="membership" className="space-y-4">
            <div className="rounded-lg border border-sky-100 overflow-hidden">
              <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                <h3 className="font-medium text-sky-800">Membre actif</h3>
              </div>
              <div className="divide-y divide-sky-100">
                <div className="px-4 py-3">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium text-gray-700">Cotisation annuelle</p>
                    <p className="font-semibold text-sky-700">55€</p>
                  </div>
                </div>
              
              </div>
            </div>
            <div className="rounded-lg border border-sky-100 overflow-hidden">
              <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                <h3 className="font-medium text-sky-800">Membre non pilote</h3>
              </div>
              <div className="divide-y divide-sky-100">
                <div className="px-4 py-3">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium text-gray-700">Cotisation annuelle</p>
                    <p className="font-semibold text-sky-700">85€</p>
                  </div>
                </div>
              
              </div>
            </div>


            <div className="rounded-lg border border-sky-100 overflow-hidden">
              <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                <h3 className="font-medium text-sky-800">Participation aux frais de fonctionnement</h3>
              </div>
              <div className="divide-y divide-sky-100">
                <div className="px-4 py-3">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium text-gray-700">Avion</p>
                    <p className="font-semibold text-sky-700">125€</p>
                  </div>
                </div>
                <div className="px-4 py-3">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium text-gray-700">Ulm</p>
                    <p className="font-semibold text-sky-700">85€</p>
                  </div>
                </div>
                <div className="px-4 py-3">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium text-gray-700">Avion -21 ans</p>
                    <p className="font-semibold text-sky-700">63€</p>
                  </div>
                </div>
                 <div className="px-4 py-3">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium text-gray-700">Ulm -25 ans</p>
                    <p className="font-semibold text-sky-700">43€</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

         
        </Tabs>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-4">
            Pour plus d'informations ou pour des tarifs personnalisés, n'hésitez pas à nous contacter.
          </p>
          <Button className="bg-sky-600 hover:bg-sky-700 text-white">Nous contacter</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
