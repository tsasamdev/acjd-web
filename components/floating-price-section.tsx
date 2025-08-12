"use client"

import { useState, useEffect } from "react"
import { EuroIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FloatingPriceSection() {
    const [open, setOpen] = useState(false)

    // Prevent background scroll when modal is open, but allow modal vertical scroll
    // Robust scroll lock: add/remove class and inject CSS
    useEffect(() => {
        if (open) {
            document.body.classList.add('scroll-lock');
        } else {
            document.body.classList.remove('scroll-lock');
        }
        return () => {
            document.body.classList.remove('scroll-lock');
        };
    }, [open]);

    // Inject scroll lock CSS (only once)
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
          body.scroll-lock {
            overflow: hidden !important;
            overscroll-behavior: contain !important;
            -webkit-overflow-scrolling: auto !important;
          }
        `;
        document.head.appendChild(style);
        return () => {
            if (style.parentNode) style.parentNode.removeChild(style);
        };
    }, []);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <Button
                onClick={() => setOpen(true)}
                className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-40 rounded-full shadow-lg bg-sky-600 hover:bg-sky-700 text-white h-20 w-20 p-0 text-2xl flex items-center justify-center"
                aria-label="Voir les tarifs"
            >
                <EuroIcon className="h-9 w-9" />
            </Button>
            <DialogContent className="w-full max-w-full max-h-[80vh] sm:max-h-[90vh] sm:max-w-[600px] overflow-y-auto bg-white px-1.5 py-1.5 sm:px-6 sm:py-6 rounded-lg">
                <DialogHeader className="border-b border-sky-100 pb-1 mb-2 sm:pb-4 sm:mb-6">
                    <DialogTitle className="text-base sm:text-xl font-semibold text-sky-800">Tarifs</DialogTitle>
                </DialogHeader>

                <Tabs defaultValue="membership" className="w-full text-xs sm:text-sm">
                    <TabsList className="flex w-full mb-2 sm:mb-6 bg-sky-50 overflow-x-auto no-scrollbar sm:grid sm:grid-cols-4">
                        <TabsTrigger value="membership" className="min-w-[80px] sm:min-w-[120px] text-xs sm:text-base data-[state=active]:bg-sky-600 data-[state=active]:text-white px-2 sm:px-4 py-1">
                            Adhésion
                        </TabsTrigger>
                        <TabsTrigger value="aircraft" className="min-w-[80px] sm:min-w-[120px] text-xs sm:text-base data-[state=active]:bg-sky-600 data-[state=active]:text-white px-2 sm:px-4 py-1">
                            Avions
                        </TabsTrigger>
                        <TabsTrigger value="instruction" className="min-w-[80px] sm:min-w-[120px] text-xs sm:text-base data-[state=active]:bg-sky-600 data-[state=active]:text-white px-2 sm:px-4 py-1">
                            Formation
                        </TabsTrigger>
                        <TabsTrigger value="decouverte" className="min-w-[80px] sm:min-w-[120px] text-xs sm:text-base data-[state=active]:bg-sky-600 data-[state=active]:text-white px-2 sm:px-4 py-1">
                            Decouverte
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="membership" className="space-y-4">
                        <div className="rounded-lg border border-sky-100 overflow-hidden">
                            <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                                <h3 className="font-medium text-sky-800">Cotisations annuelles</h3>
                            </div>
                            <div className="divide-y divide-sky-100">
                                <div className="px-4 py-3">
                                    <div className="flex justify-between mb-1">
                                        <p className="font-medium text-gray-700">Cotisation club unique (pilotes et membres amis)</p>
                                        <p className="font-semibold text-sky-700">55€</p>
                                    </div>

                                </div>
                                <div className="px-4 py-3 bg-sky-50/50">
                                    <div className="flex justify-between mb-1">
                                        <p className="font-medium text-gray-700">Frais de gestion membres amis</p>
                                        <p className="font-semibold text-sky-700">30€</p>
                                    </div>

                                </div>
                                <div className="px-4 py-3">
                                    <div className="flex justify-between mb-1">
                                        <p className="font-medium text-gray-700">Frais de gestion pilote avion</p>
                                        <p className="font-semibold text-sky-700">125€</p>
                                    </div>
                                </div>
                                <div className="px-4 py-3">
                                    <div className="flex justify-between mb-1">
                                        <p className="font-medium text-gray-700">Frais de gestion pilote ulm</p>
                                        <p className="font-semibold text-sky-700">85€</p>
                                    </div>
                                </div>


                            </div>


                        </div>
                        <div className="rounded-lg border border-sky-100 overflow-hidden">
                            <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                                <h3 className="font-medium text-sky-800">Cotisations mensuelles</h3>
                            </div>
                            <div className="px-4 py-3">
                                    <div className="flex justify-between mb-1">
                                        <p className="font-medium text-gray-700">Frais de gestion pilote de passage</p>
                                        <p className="font-semibold text-sky-700">20€</p>
                                    </div>
                                </div>
                        </div>

                    </TabsContent>

                    <TabsContent value="aircraft" className="space-y-4">
                        <div className="rounded-lg border border-sky-100 overflow-hidden">
                            <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                                <h3 className="font-medium text-sky-800">Tarifs horaires de location</h3>
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
                            </div>
                        </div>

                        <div className="rounded-lg border border-sky-100 overflow-hidden">
                            <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                                <h3 className="font-medium text-sky-800">Forfaits de location</h3>
                            </div>
                            <div className="divide-y divide-sky-100">
                                <div className="px-4 py-3">
                                    <p className="font-medium text-gray-700">Forfait 5 heures</p>
                                    <p className="text-sm text-gray-600">-5% sur le tarif horaire</p>
                                </div>
                                <div className="px-4 py-3">
                                    <p className="font-medium text-gray-700">Forfait 10 heures</p>
                                    <p className="text-sm text-gray-600">-8% sur le tarif horaire</p>
                                </div>
                                <div className="px-4 py-3">
                                    <p className="font-medium text-gray-700">Forfait 20 heures</p>
                                    <p className="text-sm text-gray-600">-12% sur le tarif horaire</p>
                                </div>
                            </div>
                        </div>
                    </TabsContent>


                    <TabsContent value="decouverte" className="space-y-4">
                    <div className="rounded-lg border border-sky-100 overflow-hidden">
                            <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                                <h3 className="font-medium text-sky-800">Tarifs baptemes</h3>
                            </div>
                            <div className="divide-y divide-sky-100">
                                <div className="px-4 py-3">
                                    <div className="flex justify-between mb-1">
                                        <p className="font-medium text-gray-700">Bapteme ULM</p>
                                        <p className="font-semibold text-sky-700">50€</p>
                                    </div> 
                                    <p className="text-xs text-gray-500">Baptême 1 personne 30 mn</p>
                                </div>
                                <div className="px-4 py-3">
                                    <div className="flex justify-between mb-1">
                                        <p className="font-medium text-gray-700">Bapteme EvektorSportstar</p>
                                        <p className="font-semibold text-sky-700">60€</p>
                                    </div> 
                                    <p className="text-xs text-gray-500">Baptême 1 personne 30 mn</p>
                                </div>
                                <div className="px-4 py-3">
                                    <div className="flex justify-between mb-1">
                                        <p className="font-medium text-gray-700">Bapteme Robin DR400</p>
                                        <p className="font-semibold text-sky-700">120€</p>
                                    </div> 
                                    <p className="text-xs text-gray-500">Baptême 1 à 3 personnes 30 mn</p>
                                </div>
                            
                            </div>
                        </div>

                        <div className="rounded-lg border border-sky-100 overflow-hidden">
                            <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                                <h3 className="font-medium text-sky-800">Tarifs vols initiation</h3>
                            </div>
                            <div className="divide-y divide-sky-100">
                                <div className="px-4 py-3">
                                    <div className="flex justify-between mb-1">
                                        <p className="font-medium text-gray-700">Vol d’initiation ULM</p>
                                        <p className="font-semibold text-sky-700">90€</p>
                                    </div> 
                                    <p className="text-xs text-gray-500">40 mn avec instructeur</p>
                                </div>
                                <div className="px-4 py-3">
                                    <div className="flex justify-between mb-1">
                                        <p className="font-medium text-gray-700">Vol d’initiation EvektorSportstar</p>
                                        <p className="font-semibold text-sky-700">120€</p>
                                    </div> 
                                    <p className="text-xs text-gray-500">40 mn avec instructeur</p>
                                </div>
                            </div>
                        </div>

                       
                    </TabsContent>

                    <TabsContent value="instruction" className="space-y-4">
                        <div className="rounded-lg border border-sky-100 overflow-hidden">
                            <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                                <h3 className="font-medium text-sky-800">Tarifs instruction</h3>
                            </div>
                            <div className="divide-y divide-sky-100">
                                <div className="px-4 py-3 flex justify-between items-center">
                                    <p className="text-gray-700">Instruction en vol</p>
                                    <p className="font-semibold text-sky-700">24€/h</p>
                                </div>                       
                            </div>
                        </div>

                        <div className="rounded-lg border border-sky-100 overflow-hidden">
                            <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                                <h3 className="font-medium text-sky-800">Forfaits formation</h3>
                            </div>
                            <div className="divide-y divide-sky-100">
                                <div className="px-4 py-3">
                                    <div className="flex justify-between mb-1">
                                        <p className="font-medium text-gray-700">Pack PPL pilote</p>
                                        <p className="font-semibold text-sky-700">100€</p>
                                    </div>
                                    <p className="text-xs text-gray-500">Cours GoodPilot + cartes VFR</p>
                                </div>
                            
                            </div>
                        </div>

                        <div className="rounded-lg border border-sky-100 overflow-hidden">
                            <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                                <h3 className="font-medium text-sky-800">Coût total estimé</h3>
                            </div>
                            <div className="divide-y divide-sky-100">
                                <div className="px-4 py-3">
                                    <div className="flex justify-between mb-1">
                                        <p className="font-medium text-gray-700">Brevet ULM</p>
                                        <p className="font-semibold text-sky-700">~3 500€</p>
                                    </div>
                                    <p className="text-xs text-gray-500">Basé sur 25 heures de vol</p>
                                </div>
                                <div className="px-4 py-3">
                                    <div className="flex justify-between mb-1">
                                        <p className="font-medium text-gray-700">LAPL</p>
                                        <p className="font-semibold text-sky-700">~6 000€</p>
                                    </div>
                                    <p className="text-xs text-gray-500">Basé sur 30 heures de vol</p>
                                </div>
                                <div className="px-4 py-3">
                                    <div className="flex justify-between mb-1">
                                        <p className="font-medium text-gray-700">PPL</p>
                                        <p className="font-semibold text-sky-700">~9 000€</p>
                                    </div>
                                    <p className="text-xs text-gray-500">Basé sur 45 heures de vol</p>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>

            </DialogContent>
                </Dialog>
            )
        }
